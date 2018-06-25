const fs = require('fs');
const http = require('http');
const path = require('path');

http.createServer((req, res) => {
  // console.log('call in ');
  // const time = process.hrtime();
  // const content = fs.readFileSync(path.resolve(__dirname, './test.txt'));
  // res.end(content);
  // console.log('call end ', process.hrtime(time));
  console.log('call in ');
  const time = process.hrtime();
  fs.createReadStream(path.resolve(__dirname, './mock/test.txt')).pipe(res);
  console.log('call end ', process.hrtime(time));
}).listen(3000);


// test with ApacheBenchmarking
// ab -n 10 -c 10 'http://localhost:3000/'
