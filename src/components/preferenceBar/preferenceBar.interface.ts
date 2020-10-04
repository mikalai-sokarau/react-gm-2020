import { IMovieSortOptions } from '@shared/interfaces/movies.model';

export enum SortOrderBy {
  asc,
  desc
}

export interface ISortOption {
  title: string;
  value: IMovieSortOptions;
}
