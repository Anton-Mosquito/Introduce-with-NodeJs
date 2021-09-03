const http = require('http');

console.log('start');

http.createServer((request, response) => {
  let obj = {
    '/index': '<h1>Hello World</h1>',
    '/about': '<h1>About</h1>',
    '/contacts': '<h1>Contacts</h1>',
  }
    if(request.url !== '/favicon.ico') {     
    response.setHeader( 'Content-Type', 'text/html');
    let statusCode = 200;
    if (obj[request.url]) {
        response.write(obj[request.url]);
    } else {
        statusCode = 404;
        response.write('<h1>Page not Found 404</h1>');
    }
   
    response.statusCode = statusCode
    response.end();
}
}).listen(8888);