
const http = require('http');

console.log('start');

http.createServer((request, response) => {
    if(request.url !== '/favicon.ico') {     
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);
    // console.log(request.headers.host);


    response.setHeader( 'Content-Type', 'text/html');
    let statusCode = 200;
    if (request.url === '/index') {
        response.write('<h1>Hello World</h1>');
    } else if (request.url === '/about') {
        response.write('<h1>About</h1>');
    } else if (request.url === '/contacts') {
        response.write('<h1>Contacts</h1>');
    } else {
        statusCode = 404;
        response.write('<h1>Page not Found 404</h1>');
    }
   
    response.statusCode = statusCode
    response.end();
}
}).listen(8888);