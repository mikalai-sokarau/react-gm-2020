import { StoreonModule } from 'storeon';
import handleError from '@shared/utils/handleError';
import { IMovie } from '@shared/interfaces/movies.model';
import {
  IState, IEvents, API_URL, ActionType,
} from '@app/store/store.interface';

const moviesModule: StoreonModule<IState, IEvents> = (store) => {
  store.on(ActionType.addMovie, async (state: IState, movie: IMovie) => {
    let movies: Array<IMovie>;

    try {
      const requestInit: RequestInit = {
        method: 'POST',
        body: JSON.stringify({ movie }),
        headers: { 'content-type': 'application/json' },
      };
      const response: Response = await fetch(`${API_URL}/movies/add`, requestInit);

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, movies);
    store.dispatch(ActionType.filterMovies);
  });

  store.on(ActionType.deleteMovie, async (state: IState, id: string) => {
    let movies: Array<IMovie>;

    try {
      const response: Response = await fetch(`${API_URL}/movies/delete/${id}`, { method: 'DELETE' });

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, movies);
    store.dispatch(ActionType.filterMovies);
  });

  store.on(ActionType.editMovie, async (state: IState, movie: IMovie) => {
    let movies: Array<IMovie>;

    try {
      const requestInit: RequestInit = {
        method: 'PUT',
        body: JSON.stringify({ movie }),
        headers: { 'content-type': 'application/json' },
      };
      const response: Response = await fetch(`${API_URL}/movies/edit`, requestInit);

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, movies);
    store.dispatch(ActionType.filterMovies);
  });

  store.on(ActionType.getMovies, async () => {
    let movies: Array<IMovie> = [];

    try {
      const response: Response = await fetch(`${API_URL}/movies`);

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, movies);
  });

  store.on(ActionType.saveMovie, (state: IState, movies: Array<IMovie>) => ({
    ...state,
    allMovies: movies,
    chosenMovies: movies,
  }));
};

export default moviesModule;
