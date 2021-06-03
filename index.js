const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        fs.readFile(path.join(__dirname, 'pages', 'home.html'),
            (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'context': 'text/html' });
                res.end(data);
            });
    }

    else if (url === '/contact') {
        fs.readFile(path.join(__dirname, 'pages', 'contact.html'),
            (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'context': 'text/html' });
                res.end(data);
            });
    }

});

server.listen(8080, 'localhost', () => {
    console.log('server started');
});