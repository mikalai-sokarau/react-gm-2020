import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/movies', async ctx => {
  ctx.body = '/movies/get';
});

router.get('/movies/:id', async ctx => {
  ctx.body = '/movies/:id';
});

router.delete('/movies/:id', async ctx => {
  ctx.body = '/movies/delete';
});

router.put('/movies', async ctx => {
  ctx.body = '/movies/put';
});

export default router;
