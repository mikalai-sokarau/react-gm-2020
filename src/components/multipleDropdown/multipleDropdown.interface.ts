import { Genres } from '@app/mockData/movies.model';

export default interface IMultipleDropdown {
  genres: Array<Genres>;
  onGenreClick: (chosenGenres: Array<Genres>) => void;
}
