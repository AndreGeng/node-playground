const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello world!');
}).listen(3000);

console.log(server.listeners);
