import { base32 } from "rfc4648";

declare var PASTE: KVNamespace;

export async function get(request: Request): Promise<Response> {
  // get the id from the url
  const id = new URL(request.url).pathname.split("/").pop();
  if (!id) {
    return new Response(JSON.stringify({ error: "Invalid id" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const paste = await PASTE.get(id);
  if (paste) {
    // display the paste
    return new Response(base32.parse(paste));
  } else {
    return new Response(
      JSON.stringify({ error: `${id} not found or was empty` }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
