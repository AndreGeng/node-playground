const LineByLine = require('./line-by-line');
const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.resolve(__dirname, './test.txt'));
lineByLine = new LineByLine(stream);
lineByLine.setEncoding('utf8');
// lineByLine.on('line', (str) => {
//   console.log(str);
// });
// lineByLine.on('readable', () => {
//   console.log('linebyline readable');
//   let chunk;
//   while((chunk = lineByLine.read()) !== null) {
//     console.log(chunk);
//   }
// });

// lineByLine.on('data', (data) => {
//   console.log(data);
// });
const dest = fs.createWriteStream(path.resolve(__dirname, './test1.txt'));
lineByLine.pipe(dest);
