import { IMovie, Genres } from '@shared/interfaces/movies.model';
import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';

export default interface IMain {
  onGenreClick: (genre: Genres) => void;
  onMovieImageClick: (movie: IMovie) => void;
  onSortingSelect: (option: ISortOption) => void
}
