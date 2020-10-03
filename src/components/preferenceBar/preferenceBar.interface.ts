import { IMovieSortOptions } from '@shared/interfaces/movies.model';

export enum ISortOrderBy {
  asc,
  desc
}

export interface ISortOption {
  title: string;
  value: IMovieSortOptions;
}
