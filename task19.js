const fs = require('fs');
const http = require('http');

console.warn('start');

http.createServer(  (request, response) => {
	if (request.url != '/favicon.ico') {
    let name = ''
    if(request.url === '/') name = 'index';
    else name = request.url
    
		fs.readFile(`files/${name}.html`, (err, data) => {
      response.setHeader("Content-Type", "text/html");

      if(!err) {
        response.statusCode = 200;
        response.write(data);
        response.end();
      } else {
        fs.readFile('files/404.html', (err, data) => {
          if (err) throw err;

          response.statusCode = 404;
          response.write(data);
          response.end();
        })
      }
    });

		//response.end();
	}
}).listen(8888);