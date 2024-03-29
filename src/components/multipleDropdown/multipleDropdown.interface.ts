import { Genres } from '@shared/interfaces/movies.model';

export interface IMultipleDropdown {
  genres: Array<Genres>;
  onGenreClick: (chosenGenres: Array<Genres>) => void;
  onBlurHandler: (e: React.FocusEvent) => void;
  styles: string;
};
