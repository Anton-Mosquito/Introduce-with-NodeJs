const fs = require('fs');
const http = require('http');

console.warn('start');

http.createServer( async (request, response) => {
	if (request.url != '/favicon.ico') {
		let text = await fs.promises.readFile(`files/${request.url}.html`, 'utf8');
	
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(8888);


