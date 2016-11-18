'use strict';

const express = require('express');

let app = express();
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    process.stdout.write("Server Started on http://localhost:" + PORT + "\n");
});
const template = () => {
    return (`
    <html>
    <head>
    <title>Time Stamp Microservice Project</title>
    <style>
        .example p {color: red; background: #ffcdd2; margin: 10px; padding: 10px;}
    </style>    
    </head>
    <body>
    <h1>Welcome to Time Stamp Microservice API</h1>
    <h2>Usage Instructions</h2>
    <p>
        <ol> 
            <li class="example">Get Information About a request you'll make to this server<br><p>https://fcc-headers-ms.herokuapp.com/whoami</p></li>
        </ol>
    </p>
    <footer>Created By <a href="https://github.com/ishanjain28">Ishan Jain</a> for <a href="https://www.freecodecamp.com/challenges/request-header-parser-microservice">this</a> project on <a href="https://freecodecamp.com">Freecodecamp.com</a></footer>
    
    </body>
    </html>
    `);
}
app.get('/', (req, res) => {
    res.send(template());
});

app.get('/whoami', (req, res) => {

    res.send({
        ipaddress: req.headers['x-forwarded-for'] || req.client.remoteAddress,
        language: req.headers['accept-language'].split(",")[0],
        software: req.headers['user-agent'].split("(")[1].split(")")[0]
    });
});
