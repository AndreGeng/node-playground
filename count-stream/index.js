const fs = require('fs');
const promisify = require('util').promisify;
const path = require('path');
const CountStream = require('./count-stream');

const countStream = new CountStream('book');

countStream.on('total', (count) => {
  console.log('Total matches:', count);
})


const res = fs.createReadStream(path.resolve(__dirname, './count-stream-test.txt'));
res.pipe(countStream);

