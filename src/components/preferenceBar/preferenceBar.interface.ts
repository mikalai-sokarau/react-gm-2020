import { Genres } from '@app/mockData/movies.model';

export interface ISortValue {
  value: string;
  label: string;
}

export interface IPreferenceBar {
  onGenreClick: (genre: Genres) => void;
}
