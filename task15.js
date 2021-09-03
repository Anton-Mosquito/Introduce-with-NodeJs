const fs = require('fs');
const http = require('http');

console.warn('start');

http.createServer((request, response) => {
  if(request.url !== '/favicon.ico') {     
  
    fs.readFile(`files/${request.url}.html`, (err, data) => {
      response.setHeader( 'Content-Type', 'text/html');
      if (!err) {
        response.statusCode = 200;
        response.write(data);
        response.end();
      } else {
        fs.readFile('files/404.html', (err,data) => {
          if(err) throw err

          response.statusCode = 404;
          response.write(data);
          response.end();
        })
      } 
    });

  }
}).listen(8888);