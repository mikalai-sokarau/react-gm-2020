import { StoreonModule } from 'storeon';
import { Genres, SortOrderBy } from '@shared/interfaces/movies.model';
import { IState, IEvents, ActionType } from '@app/store/store.interface';

const searchModule: StoreonModule<IState, IEvents> = (store) => {
  store.on(ActionType.sortMovies, ({ chosenMovies, ...state }: IState, { option, order }) => {
    chosenMovies.sort((a, b) => (a[option] > b[option] ? 1 : -1));

    return {
      ...state,
      chosenMovies: order === SortOrderBy.asc
        ? [...chosenMovies]
        : [...chosenMovies].reverse(),
    };
  });

  store.on(ActionType.filterMovies, ({ allMovies, ...state }: IState) => {
    const { genre } = state.search;
    const moviesToSearch = genre === Genres.All
      ? allMovies
      : allMovies.filter((m) => m.genre.includes(genre));
    const chosenMovies = moviesToSearch.filter((m) => m.title.includes(state.search.text));

    return {
      ...state,
      chosenMovies,
    };
  });

  store.on(ActionType.findMoviesByGenre, (state, genre) => (
    { ...state, search: { ...state.search, genre } }));

  store.on(ActionType.findMoviesByText, (state: IState, text: string) => (
    { ...state, search: { ...state.search, text } }));
};

export default searchModule;
