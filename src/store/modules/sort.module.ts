import { StoreonModule } from 'storeon';
import { IState, IEvents } from '@app/store/store.interface';
import { ISortOrderBy } from '@app/components/preferenceBar/preferenceBar.interface';

const sortModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('/movies/sort', ({ movies }: IState, { option, order }) => {
    movies.sort((a, b) => (a[option] > b[option] ? 1 : -1));

    return {
      movies: order === ISortOrderBy.asc
        ? [...movies]
        : [...movies].reverse(),
    };
  });
};

export default sortModule;
