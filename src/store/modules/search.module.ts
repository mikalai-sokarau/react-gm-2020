import { StoreonModule } from 'storeon';
import { IState, IEvents, ActionType } from '@app/store/store.interface';

const searchModule: StoreonModule<IState, IEvents> = (store) => {
  store.on(ActionType.filterMovies, ({ allMovies, ...state }: IState) => {
    store.dispatch(ActionType.getMovies, state.search);
  });
};

export default searchModule;
