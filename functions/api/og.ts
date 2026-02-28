// functions/api/og.ts
export type Env = {
  OG_CACHE: KVNamespace; // Cloudflare Pages の KV binding 名に合わせる
};

function badRequest(message: string) {
  return new Response(message, {
    status: 400,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

function text(status: number, message: string) {
  return new Response(message, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

function okImage(bytes: ArrayBuffer, contentType: string, cacheSeconds = 86400) {
  return new Response(bytes, {
    status: 200,
    headers: {
      "content-type": contentType || "application/octet-stream",
      "cache-control": `public, max-age=${cacheSeconds}`,
    },
  });
}

async function sha256Hex(input: string) {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function pickOgImage(html: string): string | null {
  // ① og:image
  const m1 = html.match(
    /<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i
  );
  if (m1?.[1]) return m1[1];

  // ② twitter:image
  const m2 = html.match(
    /<meta\s+[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i
  );
  if (m2?.[1]) return m2[1];

  // ⭐③ fallback：本文最初のimgタグ
  const m3 = html.match(
    /<img[^>]+src=["']([^"']+)["'][^>]*>/i
  );
  if (m3?.[1]) return m3[1];

  return null;
}

/**
 * GET /api/og?url=https://...  (推奨)
 * GET /api/og?key=xxxxx        (互換)
 */
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const u = new URL(request.url);
  const url = u.searchParams.get("url");
  const keyParam = u.searchParams.get("key");

  // 互換: key 指定ならそれを優先
  if (!url && !keyParam) return badRequest("Missing query param: url or key");

  const key =
    keyParam ||
    (await sha256Hex(
      // 同じURLでも表記ゆれが出にくいように trim
      (url || "").trim()
    ));

  // KV hit（bytes + metadata）
  const cached = await env.OG_CACHE.get(key, "arrayBuffer");
  if (cached) {
    const meta = await env.OG_CACHE.getWithMetadata<{ contentType?: string }>(key, {
      type: "arrayBuffer",
    });
    const contentType = meta.metadata?.contentType || "image/png";
    return okImage(cached, contentType, 86400);
  }

  // key だけ指定でキャッシュ無しなら 404
  if (!url) return text(404, "Not Found");

  // 1) HTML fetch
  const target = new URL(url);
  // SSRFっぽい内部ネットワークを避ける最低限（必要なら強化）
  if (target.protocol !== "http:" && target.protocol !== "https:") {
    return badRequest("Invalid url protocol");
  }

  const htmlRes = await fetch(target.toString(), {
    headers: {
      "user-agent": "Mozilla/5.0 (OG Fetcher)",
      accept: "text/html,*/*",
    },
  });

  if (!htmlRes.ok) return text(502, `Upstream HTML fetch failed: ${htmlRes.status}`);

  const html = await htmlRes.text();
  const og = pickOgImage(html);
  if (!og) return text(404, "og:image not found");

  // 2) og:image のURLを絶対化
  const ogUrl = new URL(og, target).toString();

  // 3) 画像 fetch
  const imgRes = await fetch(ogUrl, {
    headers: { "user-agent": "Mozilla/5.0 (OG Fetcher)" },
  });
  if (!imgRes.ok) return text(502, `Upstream image fetch failed: ${imgRes.status}`);

  const contentType = imgRes.headers.get("content-type") || "image/png";

  // サイズ上限（KV節約＆エラー回避用。必要なら調整）
  const buf = await imgRes.arrayBuffer();
  const maxBytes = 3 * 1024 * 1024; // 3MB
  if (buf.byteLength > maxBytes) {
    return text(413, `Image too large: ${buf.byteLength} bytes`);
  }

  // 4) KV put（contentType を metadata に入れる）
  await env.OG_CACHE.put(key, buf, {
    metadata: { contentType },
    expirationTtl: 60 * 60 * 24 * 7, // 7日（好みで）
  });

  return okImage(buf, contentType, 86400);
};