import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';
import mockMovies from '@app/mockData/movies';
import { IMovie, Genres, IMovieSortOptions } from '@app/mockData/movies.model';

class MovieService {
  movies: Array<IMovie>;

  constructor(movies: Array<IMovie>) {
    this.movies = this.sortMovies(IMovieSortOptions.title, movies);
  }

  addMovie(): Array<IMovie> {
    return [];
  }

  deleteMovie(id: number): Array<IMovie> {
    this.movies = this.movies.filter((m) => m.id !== id);

    return this.movies;
  }

  editMovie(): Array<IMovie> {
    return [];
  }

  filterMovies(text: string, genre: Genres): Array<IMovie> {
    const moviesToSearch = genre === Genres.All
      ? this.movies
      : this.movies.filter((m) => m.genre.includes(genre));

    return moviesToSearch.filter((m) => m.title.includes(text));
  }

  reactToModalAction(actionType: ModalType, movieId: number): void {
    switch (actionType) {
      case ModalType.Add:
        this.addMovie();
        break;
      case ModalType.Delete:
        this.deleteMovie(movieId);
        break;
      case ModalType.Edit:
        this.editMovie();
        break;
      default:
        break;
    }
  }

  sortMovies(option: IMovieSortOptions, movies?: Array<IMovie>): Array<IMovie> {
    movies.sort((a, b) => (a[option] > b[option] ? 1 : -1));

    return [...movies];
  }
}

const movieServiceInstance = new MovieService(mockMovies);

export default movieServiceInstance;
