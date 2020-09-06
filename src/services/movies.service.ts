import mockMovies from '@app/mockData/movies';
import { IMovie, Genres } from '@app/mockData/movies.model';
import { MovieSortCriteria } from '@app/components/movieItem/movieItem.interface';

class MovieService {
  readonly movies: Array<IMovie>;

  constructor(movies: Array<IMovie>) {
    this.movies = movies;
  }

  /* to implement:
  sort(criteria: MovieSortCriteria) {}
  */

  filterMovies(text: string, genre: Genres): Array<IMovie> {
    const moviesToSearch = genre === Genres.All
      ? this.movies
      : this.movies.filter((m) => m.genre.includes(genre));

    return moviesToSearch.filter((m) => m.title.includes(text));
  }
}

const movieServiceInstance = new MovieService(mockMovies);

export default movieServiceInstance;
