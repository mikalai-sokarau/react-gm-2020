import { Genres, IMovie, IMovieSortOptions } from '@shared/interfaces/movies.model';
import { SortOrderBy } from '@app/components/preferenceBar/preferenceBar.interface';

// TODO: add default redirect to the port 4100.
export const API_URL = 'http://localhost:4100';

export interface IState {
  allMovies: Array<IMovie>;
  chosenMovies: Array<IMovie>;
  search: {
    chosenMovie: IMovie,
    genre: Genres,
    text: string,
  };
}

export enum StoreModule {
  allMovies = 'allMovies',
  chosenMovies = 'chosenMovies',
  search = 'search',
}

export enum ActionType {
  addMovie = '/movies/add',
  deleteMovie = '/movies/delete',
  editMovie = '/movies/edit',
  getMovies = '/movies/get',
  saveMovie = '/movies/save',
  sortMovies = '/search/sort',
  filterMovies = '/search/filter',
  findMoviesByText = '/search/text',
  findMoviesByGenre = '/search/genre',
}

export interface IEvents {
  [ActionType.addMovie]: IMovie;
  [ActionType.deleteMovie]: string;
  [ActionType.editMovie]: IMovie;
  [ActionType.getMovies]: void;
  [ActionType.saveMovie]: Array<IMovie>;
  [ActionType.sortMovies]: { option: IMovieSortOptions, order: SortOrderBy };
  [ActionType.filterMovies]: void;
  [ActionType.findMoviesByText]: string;
  [ActionType.findMoviesByGenre]: Genres;
}
