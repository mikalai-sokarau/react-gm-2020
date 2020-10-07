import KoaRouter from 'koa-router';
import MovieService from '../services/movies.service';

const router = new KoaRouter();

router.get('/movies', ctx => {
  ctx.body = { movies: MovieService.getMovies(ctx.query) };
});

router.delete('/movies/delete/:id', ctx => {
  try {
    MovieService.deleteMovie(Number(ctx.params.id));
    ctx.status = 200;
  } catch (e) {
    ctx.body = { error: e };
    ctx.status = 500;
  }
});

router.post('/movies/add', ctx => {
  ctx.body = { movies: MovieService.addMovie(ctx.request.body.movie) };
});

router.put('/movies/edit', ctx => {
  ctx.body = { movies: MovieService.editMovie(ctx.request.body.movie) };
})

export default router;
