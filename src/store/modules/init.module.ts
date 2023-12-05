import {
  ActionType, DEFAULT_SEARCH_STATE, IEvents, IState,
} from '@app/store/store.interface';
import { StoreonModule } from 'storeon';

const initModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-useless-escape
    const [match, text] = window.location.pathname.match('search\/(.*)$') || [];
    const search = text
      ? { ...DEFAULT_SEARCH_STATE, text }
      : DEFAULT_SEARCH_STATE;

    if (text) {
      store.dispatch(ActionType.getMovies, search);
    }

    return {
      movies: [],
      search,
    };
  });
};

export default initModule;
