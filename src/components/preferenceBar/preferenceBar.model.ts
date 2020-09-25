import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';
import { IMovieSortOptions } from '@app/mockData/movies.model';

const sortOptions: Array<ISortOption> = [
  {
    title: 'title',
    value: IMovieSortOptions.title,
  },
  {
    title: 'release date',
    value: IMovieSortOptions.year,
  },
];

export default sortOptions;
