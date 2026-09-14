import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const outputDirectory = resolve(process.cwd(), "out");
const port = Number(process.env.PORT ?? 3001);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function getFilePath(url) {
  const pathname = decodeURIComponent(
    new URL(url, "http://localhost").pathname,
  );
  const pathWithoutTrailingSlash = pathname.replace(/\/$/, "");
  const candidates = pathname.endsWith("/")
    ? [`${pathname}index.html`, `${pathWithoutTrailingSlash}.html`]
    : [pathname, `${pathname}.html`, `${pathname}/index.html`];

  for (const candidate of candidates) {
    const filePath = resolve(outputDirectory, `.${candidate}`);

    if (
      filePath.startsWith(`${outputDirectory}${sep}`) &&
      existsSync(filePath) &&
      statSync(filePath).isFile()
    ) {
      return filePath;
    }
  }

  return null;
}

createServer((request, response) => {
  const filePath = getFilePath(request.url ?? "/");

  if (!filePath) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type":
      contentTypes[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Static site available at http://127.0.0.1:${port}`);
});
