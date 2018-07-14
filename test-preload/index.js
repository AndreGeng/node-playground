const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const servieStatic = (pathname, res) => {
  const filepath = path.resolve(__dirname, `.${pathname}`);
  fs.stat(filepath, (err) => {
    if (err) {
      res.writeHead(400);
      return res.end();
    }
    const stream = fs.createReadStream(filepath);
    return stream.pipe(res);
  });
}

http.createServer((req, res) => {
  const urlObj = url.parse(req.url);
  const { pathname } = urlObj;
  if (pathname === '/test2.js') {
    setTimeout(() => {
      const stream = fs.createReadStream(path.resolve(__dirname, './test2.js'));
      stream.pipe(res);
    }, 3000);
  } else if (pathname === '/') {
      const stream = fs.createReadStream(path.resolve(__dirname, './index.html'));
      stream.pipe(res);
  } else {
    servieStatic(pathname, res);
  }
}).listen(3000);

