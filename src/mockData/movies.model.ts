export enum Genres {
  All = 'all',
  Action = 'action',
  Drama = 'drama',
  Comedy = 'comedy',
  Horror = 'horror',
}

export interface IMovie {
  title: string;
  genre: Array<Genres>;
  year: number;
  imagePath: string;
  id: number;
}
