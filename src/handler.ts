import { del } from "./del";
import { get } from "./get";
import { post } from "./post";
import type { Env } from "./index";

export async function handleRequest(
  request: Request,
  env: Env
): Promise<Response> {
  let response: Response;

  const url = new URL(request.url);

  // serve a blank page at path / and favicon.ico
  if (
    request.method === "GET" &&
    (url.pathname === "/" || url.pathname === "/favicon.ico")
  ) {
    response = new Response("", {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } else if (request.method === "POST") {
    response = await post(request, env);
  } else if (request.method === "GET") {
    response = await get(request, env);
  } else if (request.method === "DELETE") {
    response = await del(request, env);
  } else {
    response = new Response(
      JSON.stringify({ error: "Invalid request method" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return response;
}
