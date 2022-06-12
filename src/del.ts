declare var SHOUT: KVNamespace;

export async function del(request: Request): Promise<Response> {
  // get the id from the url
  const id = new URL(request.url).pathname.split("/").pop();
  if (!id) {
    return new Response(JSON.stringify({ error: "Invalid id" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // make sure the key has the UUID they provided
  const paste = await SHOUT.get(id);
  if (!paste) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  await SHOUT.delete(id);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
