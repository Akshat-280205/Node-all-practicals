
import http from "http";


const fs = await import("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server created using dynamic import and top-level await!");
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
