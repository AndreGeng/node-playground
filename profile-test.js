const crypto = require('crypto');

const arr = [];
function slow10k(argument) {
    for (var i = 0; i < 10; i++) {
      console.log(i);
      arr.unshift(i);
      crypto.pbkdf2Sync(Date.now() + '', i + '', 10000, 512, 'sha512');
    }
}
function slow100k(argument) {
    for (var i = 0; i < 100; i++) {
      console.log(i);
      crypto.pbkdf2Sync(Date.now() + '', i + '', 10000, 512, 'sha512');
    }
}
slow10k()
slow100k()
