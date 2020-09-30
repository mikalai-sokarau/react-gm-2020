import handleError from '@shared/utils/handleError';
import { createStoreon, StoreonModule } from 'storeon';
import { IMovie } from '@shared/interfaces/movies.model';
import { IState, IEvents, API_URL } from '@app/store/store.interface';

const moviesModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    store.dispatch('/movies/get');

    return { movies: [] };
  });

  store.on('/movies/get', async () => {
    let movies: Array<IMovie> = [];

    try {
      const response = await fetch(`${API_URL}/movies`);
      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch('/movies/save', movies);
  });

  store.on('/movies/save', (state, movies) => ({ ...state, movies }));
};

const store = createStoreon<IState, IEvents>([moviesModule]);

export default store;
