const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('before1');
  next();
  console.log('after1');
});

app.get('/hello', (req, res) => {
  res.end('world');
});
app.use((req, res, next) => {
  console.log('before2');
  next();
  console.log('after2');
});

app.listen(3000);
