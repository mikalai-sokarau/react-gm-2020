import { IMovie, Genres } from '@shared/interfaces/movies.model';

export default interface IMain {
  onGenreClick: (genre: Genres) => void;
  onMovieImageClick: (movie: IMovie) => void;
}
