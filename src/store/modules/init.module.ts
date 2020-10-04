import { StoreonModule } from 'storeon';
import { Genres } from '@shared/interfaces/movies.model';
import { IState, IEvents, ActionType } from '@app/store/store.interface';

const initModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    store.dispatch(ActionType.getMovies);

    return {
      allMovies: [],
      chosenMovies: [],
      search: {
        chosenMovie: null,
        genre: Genres.All,
        text: '',
      },
    };
  });
};

export default initModule;
