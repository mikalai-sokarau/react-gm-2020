import { IMovie } from '@app/mockData/movies.model';

export enum MovieAction {
  Edit,
  Delete,
}

export enum MovieSortCriteria {
  Name,
  ReleaseDate,
}

export interface IMovieItem {
  movie: IMovie;
  onMovieActionClick: (action: MovieAction) => void;
  onMovieImageClick: () => void;
}
