const fs = require('fs');
const http = require('http');

http.createServer(async (request, response) => {
	let data;
	let type;

		if (request.url === '/favicon.ico') {
			data = await fs.promises.readFile('files/favicon_package_v0.16/favicon.ico');
			type = 'image/x-icon"';
		}
		
		
		if (request.url === '/index.html' || request.url === '/') {
			data = await fs.promises.readFile('files/index.html', 'utf8');
			type = 'text/html';
		}
		
		if (request.url === '/styles.css') {
			data = await fs.promises.readFile('files/style.css');
			type = 'image/png';
		}

		if (request.url === '/script.js') {
			data = await fs.promises.readFile('files/main.js');
			type = 'text/javascript';
		}
		
		response.writeHead(200, {'Content-Type': type});
		response.write(data);
		response.end();
}).listen(8888);