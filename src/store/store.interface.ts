import { Genres, IMovie, IMovieSortOptions } from '@shared/interfaces/movies.model';
import { ISortOrderBy } from '@app/components/preferenceBar/preferenceBar.interface';

// TODO: add default redirect to the port 4100.
export const API_URL = 'http://localhost:4100';

export interface IState {
  allMovies: Array<IMovie>;
  chosenMovies: Array<IMovie>;
}

export interface IEvents {
  '/movies/add': IMovie;
  '/movies/delete': string;
  '/movies/edit': IMovie;
  '/movies/get': void;
  '/movies/save': Array<IMovie>;
  '/movies/sort': { option: IMovieSortOptions, order: ISortOrderBy };
  '/movies/filter': { text: string, genre: Genres };
}
