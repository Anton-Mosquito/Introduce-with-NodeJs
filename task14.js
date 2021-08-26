const http = require('http');

http.createServer(function (request, response) {
    // response.statusCode(200);
    // response.setHeader('Content-Type', 'text/plain')

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
}).listen(8888)