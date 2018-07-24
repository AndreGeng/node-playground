const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('before1');
  next();
  console.log('after1');
});

app.get('/hello', (req, res, next) => {
  res.end('world');
  next();
});
app.use((req, res, next) => {
  console.log('before2');
  setTimeout(() => {
    next();
    console.log('after2');
  }, 2000);
});

app.listen(3000);
