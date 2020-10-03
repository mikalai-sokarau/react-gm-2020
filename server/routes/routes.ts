import KoaRouter from 'koa-router';
import MovieService from '../services/movies.service';

const router = new KoaRouter();

router.get('/movies', ctx => {
  ctx.body = { movies: MovieService.movies };
});

router.get('/movies/:id', ctx => {
  ctx.body = '/movies/:id';
});

router.delete('/movies/:id', ctx => {
  ctx.body = '/movies/delete';
});

router.put('/movies/add', ctx => {
  ctx.body = { movies: MovieService.addMovie(ctx.request.body.movie) };
});

router.put('/movies/edit', ctx => {
  ctx.body = { movies: MovieService.editMovie(ctx.request.body.movie) }
})

export default router;
