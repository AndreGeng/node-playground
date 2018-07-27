const Koa = require('koa');
const assert = require('assert');

const app = new Koa();
app.keys = ['haha', 'lala'];
app.use(async (ctx) => {
  ctx.body = 'hello world';
  const token = ctx.cookies.get('token', {
    signed: true,
  });
  // assert.strictEqual(token, 'test');
  assert.strictEqual(app, ctx.app);

  ctx.cookies.set('token', 'test', {
    signed: true,
  });
});
app.on('error', (err, ctx) => {
  console.error('within error listener', err, ctx);
});
app.listen(3000);

