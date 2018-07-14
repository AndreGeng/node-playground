const fs = require('fs');
const path = require('path');

function handleError(err) {
  console.log(err);
}

fs.readFile(path.resolve(__dirname, './fileNotExist.js'), (err, buf) => {
  if (err) {
    handleError(err);
  }
  if (buf) {
    console.log(buf);
  }
});

process.on('uncaughtException', (err) => {
  console.error(err);
});

process.stdin.resume();
