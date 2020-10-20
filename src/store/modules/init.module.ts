import { StoreonModule } from 'storeon';
import {
  IState, IEvents, ActionType, DEFAULT_SEARCH_STATE,
} from '@app/store/store.interface';

const initModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => ({
    movies: [],
    search: DEFAULT_SEARCH_STATE,
  }));
};

export default initModule;
