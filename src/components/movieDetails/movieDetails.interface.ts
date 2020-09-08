import { IMovie } from '@app/mockData/movies.model';

export default interface IMovieDetails {
  movie: IMovie,
  onBackButtonClick: () => void,
}
