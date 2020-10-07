import ISearchQueryParams from '@server/services/movies.service.interface';
import {
  Genres, IMovie, IMovieSortOptions, SortOrderBy,
} from '@shared/interfaces/movies.model';

// TODO: add default redirect to the port 4100.
export const API_URL = 'http://localhost:4100';

export interface IState {
  allMovies: Array<IMovie>;
  chosenMovies: Array<IMovie>;
  search: {
    genre: Genres,
    offset: number,
    orderBy: SortOrderBy,
    size: number,
    sortBy: IMovieSortOptions,
    text: string,
  };
}

export const DEFAULT_SEARCH_STATE = {
  genre: Genres.All,
  offset: 0,
  orderBy: SortOrderBy.asc,
  size: undefined as number,
  sortBy: IMovieSortOptions.title,
  text: '',
};

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
  filterMovies = '/search/filter',
}

export interface IEvents {
  [ActionType.addMovie]: IMovie;
  [ActionType.deleteMovie]: string;
  [ActionType.editMovie]: IMovie;
  [ActionType.getMovies]: ISearchQueryParams;
  [ActionType.saveMovie]: { movies: Array<IMovie>, params?: any };
  [ActionType.filterMovies]: void;
}
