import { base32 } from "rfc4648";

declare var PASTE: KVNamespace;

const DEFAULT_TTL = 60 * 60 * 24 * 30; // 30 days
export async function post(request: Request): Promise<Response> {
  const arrayBuffer = await request.arrayBuffer();
  const view = new Uint8Array(arrayBuffer);
  // get ttl from query string
  const ttl = parseInt(
    new URL(request.url).searchParams.get("ttl") || `${DEFAULT_TTL}`
  );

  const id = crypto.randomUUID();
  await PASTE.put(id, base32.stringify(view), {
    expirationTtl: ttl,
  });
  // return the url to the paste
  return new Response(request.url.replace(/\/$/, "") + "/" + id + "\n", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
