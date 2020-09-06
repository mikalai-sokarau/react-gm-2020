import { IMovie, Genres } from '@app/mockData/movies.model';

export default interface IMain {
  movies: Array<IMovie>;
  callback: (genre: Genres) => void;
}
