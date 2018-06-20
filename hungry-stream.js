const { Duplex } = require('stream');

class HungryStream extends Duplex {
  constructor(...arg) {
    super(...arg);
    this.waiting = false;
  }
  _read() {
    console.log('_read');
    if (!this.waiting) {
      this.push('Feed me data! > ');
      this.waiting = true;
    }
  }
  _write(chunk, encoding, callback) {
    console.log('_write');
    this.waiting = false;
    this.push(`\u001b[32m${chunk}\u001b[39m`);
    callback();
  }
}

const hungryStream = new HungryStream();
process.stdin.pipe(hungryStream).pipe(process.stdout);
