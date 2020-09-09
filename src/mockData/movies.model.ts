export enum Genres {
  All = 'all',
  Action = 'action',
  Drama = 'drama',
  Comedy = 'comedy',
  Horror = 'horror',
}

export enum IMovieSortOptions {
  title = 'title',
  year = 'year',
}

export interface IMovie {
  title: string;
  genre: Array<Genres>;
  year: number;
  imagePath: string;
  id: number;
  duration: number;
  rating: number;
  description: string;
}
