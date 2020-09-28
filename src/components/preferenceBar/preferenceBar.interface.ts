import { Genres, IMovieSortOptions } from '@shared/interfaces/movies.model';

export interface ISortOption {
  title: string;
  value: IMovieSortOptions;
}

export interface IPreferenceBar {
  onGenreClick: (genre: Genres) => void;
  onSortingSelect: (option: ISortOption) => void;
}
