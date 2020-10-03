import { IMovie } from '@shared/interfaces/movies.model';

// TODO: add default redirect to the port 4100.
export const API_URL = 'http://localhost:4100';

export interface IState {
  movies: Array<IMovie>;
}

export interface IEvents {
  '/movies/add': IMovie;
  '/movies/edit': IMovie;
  '/movies/get': void;
  '/movies/save': Array<IMovie>;
}
