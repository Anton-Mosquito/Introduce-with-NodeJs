const fs = require('fs');
const http = require('http');

console.warn('start');

http.createServer(  (request, response) => {
	if (request.url != '/favicon.ico') {
    getPage(request.url, response)
	}
}).listen(8888);

function getPage(name, response, statusCode = 200) {
  if (name === '/') name = 'index';
  
  fs.readFile(`files/${name}.html`, (err, data) => {
    if(!err) {
      response.setHeader('Content-Type', 'text/html')
      response.statusCode = statusCode;
      response.write(data);
      response.end();
    } else {
      if(statusCode !== '404') getPage('404', response, 404)
      else throw err
      
    }
  });
}
