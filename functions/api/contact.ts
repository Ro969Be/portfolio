// functions/api/contact.ts

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const body = await request.json();

    console.log("CONTACT:", body);

    return new Response(
      JSON.stringify({
        ok: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: e.message,
      }),
      { status: 500 }
    );
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