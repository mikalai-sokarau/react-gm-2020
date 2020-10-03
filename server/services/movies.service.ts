import mockMovies from '../mockData/movies';
import { IMovie, Genres, IMovieSortOptions } from '../../shared/interfaces/movies.model';

class MovieService {
  movies: Array<IMovie>;

  constructor(movies: Array<IMovie>) {
    this.movies = this.sortMovies(IMovieSortOptions.title, movies);
  }

  addMovie(movie: IMovie): Array<IMovie> {
    this.movies.push({
      ...movie,
      id: Date.now(),
      rating: Number((Math.random() * Math.floor(10)).toFixed(1)),
    });

    return this.movies;
  }

  deleteMovie(id: number): Array<IMovie> {
    this.movies = this.movies.filter((m) => m.id !== id);

    return this.movies;
  }

  editMovie(movie: IMovie): Array<IMovie> {
    const movieIndex = this.movies.findIndex((m) => m.id === movie.id);

    this.movies.splice(movieIndex, 1, movie);

    return this.movies;
  }

  filterMovies(text: string, genre: Genres): Array<IMovie> {
    const moviesToSearch = genre === Genres.All
      ? this.movies
      : this.movies.filter((m) => m.genre.includes(genre));

    return moviesToSearch.filter((m) => m.title.includes(text));
  }

  sortMovies(option: IMovieSortOptions, movies?: Array<IMovie>): Array<IMovie> {
    movies.sort((a, b) => (a[option] > b[option] ? 1 : -1));

    return [...movies];
  }
}

const movieServiceInstance = new MovieService(mockMovies);

export default movieServiceInstance;
