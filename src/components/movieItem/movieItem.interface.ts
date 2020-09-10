import { IMovie } from '@app/mockData/movies.model';

export enum MovieAction {
  Edit,
  Delete,
}

export interface IMovieItem {
  movie: IMovie;
  onMovieImageClick: () => void;
}
