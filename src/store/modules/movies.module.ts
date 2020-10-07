import { StoreonModule } from 'storeon';
import handleError from '@shared/utils/handleError';
import { IMovie } from '@shared/interfaces/movies.model';
import ISearchQueryParams from '@server/services/movies.service.interface';
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

    store.dispatch(ActionType.saveMovie, { movies });
  });

  store.on(ActionType.deleteMovie, async (state: IState, id: string) => {
    let movies: Array<IMovie>;

    try {
      const response: Response = await fetch(`${API_URL}/movies/delete/${id}`, { method: 'DELETE' });

      if (response.ok) {
        const movieId = Number(id);

        movies = state.movies.filter((m) => m.id !== movieId);
      }
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, { movies });
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

      if (response.ok) {
        movies = [...state.movies];
        movies.splice(movies.findIndex((m) => m.id === movie.id), 1, movie);
      }
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, { movies });
  });

  store.on(ActionType.getMovies, async (state: IState, params: ISearchQueryParams) => {
    let movies: Array<IMovie> = [];
    const queryParams = Object
      .entries(params)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    try {
      const response: Response = await fetch(
        `${API_URL}/movies${queryParams ? `?${queryParams}` : ''}`,
      );

      movies = (await response.json()).movies;
    } catch (e) {
      movies = [];
      handleError(e);
    }

    store.dispatch(ActionType.saveMovie, { movies, params });
  });

  store.on(ActionType.saveMovie, (state: IState, { movies, params = state.search }) => ({
    ...state,
    search: params,
    movies,
  }));
};

export default moviesModule;
