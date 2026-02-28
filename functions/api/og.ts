export type Env = {
    OG_CACHE: KVNamespace; // Cloudflare Pages の KV binding 名に合わせる
};

function badRequest(message: string) {
    return new Response(message, {
        status: 400,
        headers: { "content-type": "text/plain; charset=utf-8" },
    });
}

function okPng(bytes: ArrayBuffer, cacheSeconds = 3600) {
    return new Response(bytes, {
        status: 200,
        headers: {
            "content-type": "image/png",
            "cache-control": `public, max-age=${cacheSeconds}`,
        },
    });
}

/**
 * /api/og?key=xxxxx などで呼ぶ想定（keyをKVキーにする）
 * - ここでは “KVにPNG(ArrayBuffer)が入っている” 前提の最小実装
 * - OG生成ロジックは後で差し替え可能
 */
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) return badRequest("Missing query param: key");

    // KVから取得（PNGを想定）
    const hit = await env.OG_CACHE.get(key, "arrayBuffer");
    if (!hit) return new Response("Not Found", { status: 404 });

    return okPng(hit, 3600);
};