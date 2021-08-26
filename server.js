
const http = require('http');

console.log('start');

http.createServer((request, response) => {
    // response.statusCode(200);
    // response.setHeader('Content-Type', 'text/plain');

    console.log('query');

    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.writeHead(200, {'Content-Type': 'text/html'});
    response.writeHead(200, {'Content-Type': 'text/json', 'X-Powered-By': 'myHeader'});
    response.write('<h1>Hello World</h1>');
    response.end();
}).listen(8888);