// functions/api/contact.ts
export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  try {
    const { request, env } = ctx;

    // --- 必須 env チェック（これで “設定漏れ” が即バレる） ---
    if (!env.RESEND_API_KEY) {
      return json(500, {
        ok: false,
        where: "env",
        error: "RESEND_API_KEY is missing",
      });
    }
    if (!env.RESEND_TO) {
      return json(500, {
        ok: false,
        where: "env",
        error: "RESEND_TO is missing (your mail address)",
      });
    }
    // FROM は Resend で許可されている送信元が必要
    // 未設定なら Resend の開発用 from を使う（※後で必ず自分のドメインに変える）
    const from = env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";

    // --- body ---
    const body = await safeJson(request);
    const name = (body?.name ?? "").toString().trim();
    const email = (body?.email ?? "").toString().trim();
    const message = (body?.message ?? "").toString().trim();
    const turnstileToken = (body?.turnstileToken ?? "").toString().trim();

    if (!name || !email || !message || !turnstileToken) {
      return json(400, { ok: false, where: "input", error: "Missing fields" });
    }

    // --- Turnstile verify ---
    if (!env.TURNSTILE_SECRET_KEY) {
      return json(500, {
        ok: false,
        where: "env",
        error: "TURNSTILE_SECRET_KEY is missing",
      });
    }

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const verifyJson = await verifyRes.json<any>();

    if (!verifyJson?.success) {
      return json(400, {
        ok: false,
        where: "turnstile",
        error: "Turnstile verification failed",
        detail: verifyJson,
      });
    }

    // --- Resend send ---
    const subject = `[Portfolio] New contact from ${name}`;
    const text =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `\n` +
      `Message:\n${message}\n` +
      `\n` +
      `Sent at: ${new Date().toISOString()}\n`;

    // Resend API: https://api.resend.com/emails
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [env.RESEND_TO],
        subject,
        text,
        reply_to: email, // 返信先を問い合わせ元に
      }),
    });

    const raw = await r.text();
    if (!r.ok) {
      // Resend 側の拒否理由を返す（これが一番重要）
      return json(502, {
        ok: false,
        where: "resend",
        status: r.status,
        resend: tryParse(raw),
      });
    }

    return json(200, {
      ok: true,
      where: "done",
      resend: tryParse(raw), // messageId が返る
    });
  } catch (e: any) {
    return json(500, { ok: false, where: "catch", error: e?.message || String(e) });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  // CORS が必要ならここで
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
};

function json(status: number, data: any) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return null;
  }
}

function tryParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return { raw: s };
  }
}

type Env = {
  RESEND_API_KEY?: string;
  RESEND_TO?: string;
  RESEND_FROM?: string;
  TURNSTILE_SECRET_KEY?: string;
};