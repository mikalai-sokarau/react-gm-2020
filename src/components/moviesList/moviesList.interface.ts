import { IMovie } from '@app/mockData/movies.model';

export default interface IMoviesList {
  movies: Array<IMovie>;
  onMovieImageClick: (movie: IMovie) => void;
}
