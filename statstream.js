const http = require('http');
const url = require('url');
const { Readable } = require('stream');
const util = require('util');

const StatStream = class extends Readable {
  constructor(limit) {
    super();
    this.limit = limit;
  }
  _read(size) {
    if (this.limit === 0) {
      this.push(null);
    } else {
      this.push(`${util.inspect(process.memoryUsage())}\n`);
      this.limit -= 1;
    }
  }
}

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url);
  if (urlObj.pathname === '/') {
    (new StatStream(10)).pipe(res);
  }
});

server.listen(8000);
