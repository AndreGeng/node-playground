const http = require('http');
const url = require('url');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  const options = url.parse(req.url);
  const optionsWithHeaders = Object.assign({}, options, {
    hostname: 'nodejs.cn',
  });
  const clientReq = http.request(optionsWithHeaders, (clientRes) => {
    res.writeHead(clientRes.statusCode, clientRes.headers);
    clientRes.pipe(res);
  });
  req.pipe(clientReq);
});

server.listen(3000);
