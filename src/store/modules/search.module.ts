import { StoreonModule } from 'storeon';
import { Genres } from '@shared/interfaces/movies.model';
import { IState, IEvents } from '@app/store/store.interface';
import { ISortOrderBy } from '@app/components/preferenceBar/preferenceBar.interface';

const searchModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('/search/sort', ({ chosenMovies, ...state }: IState, { option, order }) => {
    chosenMovies.sort((a, b) => (a[option] > b[option] ? 1 : -1));

    return {
      ...state,
      chosenMovies: order === ISortOrderBy.asc
        ? [...chosenMovies]
        : [...chosenMovies].reverse(),
    };
  });

  store.on('/search/filter', ({ allMovies, ...state }: IState) => {
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

  store.on('/search/genre', (state, genre) => ({ ...state, search: { ...state.search, genre } }));

  store.on('/search/text', (state: IState, text: string) => ({ ...state, search: { ...state.search, text } }));
};

export default searchModule;
