import { IMovie, Genres } from '@app/mockData/movies.model';

export default interface IMain {
  movies: Array<IMovie>;
  onGenreClick: (genre: Genres) => void;
  onMovieImageClick: (movie: IMovie) => void;
}
