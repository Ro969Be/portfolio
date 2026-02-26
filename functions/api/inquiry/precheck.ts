export const onRequestPost: PagesFunction = async (ctx) => {
  const json = await ctx.request.json().catch(() => null);
  if (!json) return new Response(JSON.stringify({ error: "Bad Request" }), { status: 400 });

  const name = String(json.name ?? "").trim();
  const email = String(json.email ?? "").trim();
  const message = String(json.message ?? "").trim();

  // 軽い判定（UX用）：ここでは厳格に止めない
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ level: "warn", message: "メール形式をご確認ください。" });
  }
  if (!message || message.length < 10) {
    return jsonResponse({ level: "warn", message: "内容が短いです（10文字以上推奨）。" });
  }

  // ここに「NGワード」などを入れてもOK（block は submit で最終判定）
  const looksSpammy =
    message.length < 20 && /(http|https):\/\//i.test(message);

  if (looksSpammy) {
    return jsonResponse({ level: "warn", message: "リンクのみの内容は受け付けできない場合があります。" });
  }

  // 名前は必須扱いでも良いが、ここは柔らかく
  if (!name) {
    return jsonResponse({ level: "warn", message: "お名前があると返信がスムーズです。" });
  }

  return jsonResponse({ level: "ok", message: "送信できます。" });
};

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}