module.exports = () => {
    return (`
    <html>
    <head>
    <title>Time Stamp Microservice Project</title>
    <style>
        .example p {color: red; background: #ffcdd2; margin: 10px; padding: 10px;} a {text-decoration: none; color: red;} a:hover {text-decoration:none; color: black;} a:visited {text-decoration:none; color: black;} a:active {text-decoration:none;color: black;}
    </style>    
    </head>
    <body>
    <h1>Welcome to Time Stamp Microservice API</h1>
    <h2>Usage Instructions</h2>
    <p>
        <ol> 
            <li class="example">Get Information About a request you'll make to this server<br><a href="https://fcc-headers-ms.herokuapp.com/whoami" style="color: red; background: #0fecef; margin: 2px; padding: 2px;">https://fcc-headers-ms.herokuapp.com/whoami</a></li>
        </ol>
    </p>
    <footer>Created By <a href="https://github.com/ishanjain28">Ishan Jain</a> for <a href="https://www.freecodecamp.com/challenges/request-header-parser-microservice">this</a> project on <a href="https://freecodecamp.com">Freecodecamp.com</a></footer>
    
    </body>
    </html>
    `);
};
