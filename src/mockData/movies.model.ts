export enum Genres {
  All = 'all',
  Action = 'action',
  Drama = 'drama',
  Comedy = 'comedy',
  Horror = 'horror',
}

export enum IMovieSortOptions {
  title = 'title',
  year = 'releaseDate',
}

export interface IMovie {
  title: string;
  genre: Array<Genres>;
  releaseDate: string;
  imagePath: string;
  url: string;
  id: number;
  duration: number;
  rating: number;
  description: string;
}
