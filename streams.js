const { createReadStream } = require("fs");
const { join } = require("path");
const { createServer } = require("http");

const server = createServer((req, res) => {
    const { url, method } = req;

    if (url === "/" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        const readStream = createReadStream(join(__dirname, "./index.html"));
        readStream.pipe(res);
    }
    else {
        res.setHeader("Content-Type", "text/html");
        const readStream = createReadStream(join(__dirname, "./notFound404.html"));
        readStream.pipe(res);
    }
});

server.listen(3000, ()=> console.log("Server listening on port 3000)"));