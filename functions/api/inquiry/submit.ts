type Env = {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  RESEND_FROM: string;
  RESEND_TO: string;
  RATE_LIMIT_MAX?: string;
  RATE_LIMIT_WINDOW_SEC?: string;
  KV: KVNamespace;
};

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const { request, env } = ctx;

  const ip = request.headers.get("cf-connecting-ip") || "0.0.0.0";
  const ua = request.headers.get("user-agent") || "";
  const origin = request.headers.get("origin") || "";

  const body = await request.json().catch(() => null);
  if (!body) return json({ error: "Bad Request" }, 400);

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.honeypot ?? "").trim();
  const token = String(body.turnstileToken ?? "").trim();

  // 1) honeypot
  if (honeypot) return json({ error: "送信できませんでした。" }, 400);

  // 2) basic validation（最終）
  if (!name) return json({ error: "お名前を入力してください。" }, 400);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "メール形式が正しくありません。" }, 400);
  }
  if (!message || message.length < 10) {
    return json({ error: "内容が短すぎます（10文字以上）。" }, 400);
  }

  // 3) rate limit（KV）
  const max = clampInt(env.RATE_LIMIT_MAX ?? "5", 1, 50);
  const windowSec = clampInt(env.RATE_LIMIT_WINDOW_SEC ?? "600", 30, 86400);
  const rlKey = `rl:submit:${ip}`;
  const now = Date.now();

  const allowed = await rateLimitKV(env.KV, rlKey, max, windowSec);
  if (!allowed) {
    return json({ error: "送信回数が多すぎます。時間をおいて再度お試しください。" }, 429);
  }

  // 4) Turnstile server-side validation（必須）
  if (!env.TURNSTILE_SECRET_KEY) return json({ error: "Server misconfigured." }, 500);
  if (!token) return json({ error: "認証が必要です（Turnstile）。" }, 400);

  const turnstileOk = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip);
  if (!turnstileOk) {
    return json({ error: "認証に失敗しました。もう一度お試しください。" }, 400);
  }

  // 5) Send email via Resend
  if (!env.RESEND_API_KEY || !env.RESEND_FROM || !env.RESEND_TO) {
    return json({ error: "Server misconfigured." }, 500);
  }

  const subject = `【Portfolio】お問い合わせ: ${sanitizeInline(name)} <${sanitizeInline(email)}>`;
  const text =
`[Portfolio Inquiry]
From: ${name} <${email}>
IP: ${ip}
UA: ${ua}
Origin: ${origin}

Message:
${message}
`;

  const resendOk = await sendWithResend(env.RESEND_API_KEY, {
    from: env.RESEND_FROM,
    to: env.RESEND_TO,
    subject,
    text,
    reply_to: email,
  });

  if (!resendOk) {
    return json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, 502);
  }

  return json({ ok: true }, 200);
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function clampInt(v: string, min: number, max: number) {
  const n = Number.parseInt(v, 10);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

async function rateLimitKV(kv: KVNamespace, key: string, max: number, windowSec: number) {
  // シンプルな固定窓（raceは許容：ポートフォリオ用途）
  const raw = await kv.get(key);
  const data = raw ? safeJson<{ count: number; resetAt: number }>(raw) : null;

  const now = Date.now();
  const resetAt = data?.resetAt ?? (now + windowSec * 1000);
  const count = data?.count ?? 0;

  if (now > resetAt) {
    await kv.put(key, JSON.stringify({ count: 1, resetAt: now + windowSec * 1000 }), {
      expirationTtl: windowSec + 5,
    });
    return true;
  }

  if (count >= max) return false;

  await kv.put(key, JSON.stringify({ count: count + 1, resetAt }), {
    expirationTtl: Math.ceil((resetAt - now) / 1000) + 5,
  });
  return true;
}

function safeJson<T>(s: string): T | null {
  try { return JSON.parse(s) as T; } catch { return null; }
}

async function verifyTurnstile(secret: string, responseToken: string, remoteip: string) {
  // Turnstile Siteverify（server-side validation is mandatory） :contentReference[oaicite:6]{index=6}
  const form = new FormData();
  form.set("secret", secret);
  form.set("response", responseToken);
  form.set("remoteip", remoteip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });

  const data = await res.json().catch(() => null) as null | { success?: boolean };
  return !!(res.ok && data && data.success);
}

async function sendWithResend(apiKey: string, payload: {
  from: string;
  to: string;
  subject: string;
  text: string;
  reply_to?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      subject: payload.subject,
      text: payload.text,
      reply_to: payload.reply_to,
    }),
  });

  return res.ok;
}

function sanitizeInline(s: string) {
  return s.replace(/[\r\n\t]/g, " ").slice(0, 200);
}