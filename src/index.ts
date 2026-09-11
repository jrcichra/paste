import { handleRequest } from "./handler";

export interface Env {
  PASTE: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return handleRequest(request, env);
  },
};
