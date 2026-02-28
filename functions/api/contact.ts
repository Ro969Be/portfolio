export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));

    // 疎通確認：受け取れたらOK
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e?.message || "unknown" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};