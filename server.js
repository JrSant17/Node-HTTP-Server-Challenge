const http = require('http');

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    // if (url[1] === '' ) {
      if (request.method === 'GET') {
        response.end("Hello Galvanize!");
      }
  });
  const PORT = 3000;
  const HOST = 'localhost';
  server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });