export enum Genres {
  Action = 'action',
  Animation = 'animation',
  Adventure = 'adventure',
  Drama = 'drama',
  Comedy = 'comedy',
  Children = 'children',
  Criminal = 'criminal',
  DarkComedy = 'dark comedy',
  Epic = 'epic',
  Horror = 'horror',
  Family = 'family',
  Fantasy = 'fantasy',
  Historical = 'historical',
  Melodrama = 'melodrama',
  Mystery = 'mystery',
  Mysical = 'mysical',
  Romance = 'romance',
  ScienceFiction = 'science fiction',
  Supernatural = 'supernatural',
  Thriller = 'thriller',
  Western = 'western',
}

export interface IMovie {
  title: string;
  genre: Array<genres>;
  year: number;
  imagePath: string;
  id: number;
}
