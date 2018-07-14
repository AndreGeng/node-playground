const heapdump = require('heapdump');

let string = '1 string to rule them all';

let leakyArr = [];
let count = 2;
setInterval(() => {
  leakyArr.push(string.replace(/1/g, count++));
}, 0);

// setInterval(() => {
//   gc();
//   console.log(process.memoryUsage());
// }, 1000);

setInterval(() => {
  heapdump.writeSnapshot(() => {
    console.log('heapdump done');
  });
}, 10000);
