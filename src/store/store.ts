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
      const response: Response = await fetch(`${API_URL}/movies`);

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch('/movies/save', movies);
  });

  store.on('/movies/add', async (state: IState, movie: IMovie) => {
    let movies: Array<IMovie>;

    try {
      const requestInit: RequestInit = {
        method: 'PUT',
        body: JSON.stringify({ movie }),
        headers: { 'content-type': 'application/json' },
      };
      const response: Response = await fetch(`${API_URL}/movies/add`, requestInit);

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch('/movies/save', movies);
  });

  store.on('/movies/save', (state: IState, movies: Array<IMovie>) => ({ ...state, movies }));
};

const store = createStoreon<IState, IEvents>([moviesModule]);

export default store;
