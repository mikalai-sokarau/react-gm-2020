import KoaRouter from 'koa-router';
import MovieService from '../services/movies.service';

const router = new KoaRouter();

router.get('/movies', async ctx => {
  ctx.body = { movies: MovieService.movies };
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
