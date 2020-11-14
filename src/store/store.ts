import isBrowser from '@app/utils/isBrowser';
import { createStoreon, StoreonStore } from 'storeon';
import moviesModule from '@app/store/modules/movies.module';
import { IState, IEvents, DEFAULT_STORE_STATE } from '@app/store/store.interface';

const configureStore = (initialState?: IState) => {
  const modules = [
    (store: StoreonStore<IState, IEvents>) => {
      store.on('@init', () => (isBrowser
        ? (window as any)?.PRELOADED_STATE || DEFAULT_STORE_STATE
        : initialState));
    },
  ];

  if (isBrowser) {
    modules.push(moviesModule);
  }

  return createStoreon<IState, IEvents>(modules);
};

export default configureStore;
