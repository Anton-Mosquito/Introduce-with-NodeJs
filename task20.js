const fs = require('fs');
const http = require('http');

console.warn('start');

http.createServer(  (request, response) => {
    if (request.url.endsWith('.css') || request.url.endsWith('.js') || request.url.endsWith('.ico')) {
      getAdditionalFiles(request.url, response)
    } else if (request.url.endsWith('.png')) {
      getImageFiles(request.url, response)
    } else getPage(request.url, response)
}).listen(8888);

function getPage(name, response, statusCode = 200) {
  if (name === '/') name = 'index';
  
  fs.readFile(`files/${name}.html`, 'utf8',(err, data) => {
    if(!err) {
      fs.readFile('files/elem/menu.html', 'utf8', (err, menu) => {
        if(err) throw err;

        data = data.replace(/\{\{menu\}\}/g, menu);
        
        fs.readFile(`files/elem/footer.html`, 'utf8',(err, footer) => {
          if(err) throw err;

          data = data.replace(/\{\{footer\}\}/g, footer);

          response.setHeader('Content-Type', 'text/html')
          response.statusCode = statusCode;
          response.write(data);
          response.end();
        })
      })
    } else {
      if(statusCode !== '404') getPage('404', response, 404)
      else throw err
      
    }
  });
}

function getAdditionalFiles(url,response) {
  if (url === '/favicon.ico') url = 'favicon_package_v0.16/favicon-32x32.png';

  fs.readFile(`files/${url}`, (err, data) => {
    if(err) throw err;

    response.setHeader('Content-Type', 'text/css')
    response.statusCode = 200;
    response.write(data);
    response.end();
  })
}

function getImageFiles(url,response) {

  fs.readFile(`files/${url}`, (err, data) => {
    if(err) throw err;

    response.setHeader('Content-Type', 'image/jpg')
    response.statusCode = 200;
    response.write(data);
    response.end();
  })
}
