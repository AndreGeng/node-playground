const fs = require('fs');
const {
  promisify
} = require('util');
const path = require('path');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const result = [];
const dirs = [];
function findBradthFirst(nameRe, startPath) {
  return readdir(path.resolve(startPath))
    .then((files) => {
      return Promise.all(
        files.map(
          file => stat(path.resolve(startPath, file))
        )
      ).then((stats) => {
        return [files, stats];
      });
    })
    .then(([files, stats]) => {
      for (let i = 0; i < stats.length; i += 1) {
        const stat = stats[i];
        const file = files[i];
        if (stat.isFile() && nameRe.test(file)) {
          result.push(path.resolve(startPath, file));
        } else if (stat.isDirectory()) {
          dirs.push(path.resolve(startPath, file));
        }
      }
      if (dirs.length > 0) {
        return findBradthFirst(nameRe, path.resolve(startPath, dirs.shift()));
      } else {
				return result;
			}
    });
}

// const { readdir, lstatSync } = require('fs');
// const { resolve } = require('path');

// const rootDir = resolve(__dirname, 'test-folder');

// const readDir = (folderPath) => {
//   return new Promise((resolveP, rejectP) => {
//     readdir(folderPath, (err, files) => {
//       const queue = new Array();
//       if (err) {
//         console.error(err);
//         rejectP();
//         return;
//       }
//       files.forEach((file) => {
//         const filePath = resolve(folderPath, file);
//         const fileStat = lstatSync(filePath);
//         if(fileStat.isFile()) {
//           console.log(file);
//         } else if (fileStat.isDirectory()) {
//           queue.push(filePath);
//         }
//       });
//       if (queue.length > 0) {
//         const result = Promise.all(queue.map((item) => readDir(item)));
//         resolveP(result);
//       } else {
//         resolveP();
//       }
//     });
//   });
// };

(async () => {
  const result = await findBradthFirst(/\.js/, path.resolve(__dirname, 'test-folder'));
  console.log(result);
	// readDir(resolve(__dirname, 'test-folder'));
})();
