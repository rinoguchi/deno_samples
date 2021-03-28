import { serve } from "https://deno.land/std@0.91.0/http/server.ts";
const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log("WEB server running on http://localhost:8080/");
for await (const request of server) {
  request.respond({ status: 200, body: "Hello Deno!" });
}
