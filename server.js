'use strict';

const http = require('http');
let PORT = process.env.PORT || 5000;
const template = require('./template'); 

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end(template());
    } else if (req.url == '/whoami') {
        res.end(JSON.stringify({
            ipaddress: req.headers['x-forwarded-for'] || req.client.remoteAddress,
            language: req.headers['accept-language'].split(",")[0],
            software: req.headers['user-agent'].split("(")[1].split(")")[0]
        }));
    } else {
        res.statusCode = 404;
        res.statusText = "Error 404: Not found";
        res.end("<h1>Error 404: Not found</h1>");
    }
});

server.listen(PORT);

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});