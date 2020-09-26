import Koa from'koa';

const port = 4100;
const app = new Koa();



app.use(async ctx => {
  ctx.body = 'hello Koa';
  console.log(ctx.body);
})

app.listen(port);
