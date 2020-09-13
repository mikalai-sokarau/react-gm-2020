import React, { useState, FC } from 'react';
import Main from '@app/components/main/main.component';
import MoviesService from '@app/services/movies.service';
import Header from '@app/components/header/header.component';
import Footer from '@app/components/footer/footer.component';
import useStyle from '@app/components/app/app.component.styles';
import CoreModal from '@app/components/modals/coreModal/coreModal.component';
import { Genres, IMovie, IMovieSortOptions } from '@app/mockData/movies.model';
import MovieDetails from '@app/components/movieDetails/movieDetails.component';
import HeaderActiveComponent from '@app/components/app/app.component.interface';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';
import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';
import { IModalContext, ModalContext } from '@app/components/modals/coreModal/coreModal.context';

const App: FC<Record<string, unknown>> = () => {
  const classes = useStyle();
  const [searchText, setSearchText] = useState('');
  const [chosenMovie, setChosenMovie] = useState(null);
  const [chosenGenre, setChosenGenre] = useState(Genres.All);
  const [movies, setMovies] = useState(MoviesService.movies);
  const [chosenSortOption, setChosenSortOption] = useState(IMovieSortOptions.title);
  const [headerComponent, toggleHeaderComponent] = useState(HeaderActiveComponent.Header);
  const [chosenModal, setChosenModal] = useState<IModalContext>({ type: ModalType.Add });

  const handleSearchMovieSubmit = (text: string) => {
    setSearchText(text);
    setMovies(MoviesService.filterMovies(text, chosenGenre));
  };
  const handleGenreClick = (genre: Genres) => {
    setChosenGenre(genre);
    const filteredMovies = MoviesService.filterMovies(searchText, genre);
    const sortedMovies = MoviesService.sortMovies(chosenSortOption, filteredMovies);
    setMovies(sortedMovies);
  };
  const handleMovieClick = (movie: IMovie) => {
    setChosenMovie(movie);
    toggleHeaderComponent(HeaderActiveComponent.MovieDetails);
  };
  const handleSortingSelect = ({ value }: ISortOption) => {
    const sortedMovies = MoviesService.sortMovies(value, movies);
    setChosenSortOption(value);
    setMovies(sortedMovies);
  };

  if (chosenModal.actionType) {
    MoviesService.reactToModalAction(chosenModal.actionType, chosenModal.movieId);
    setChosenModal({ type: null });
    setMovies(MoviesService.movies);
  }

  return (
    <div className={classes.core}>
      <ErrorBoundary>
        <ModalContext.Provider value={{ chosenModal, setChosenModal }}>
          {headerComponent === HeaderActiveComponent.Header
            ? <Header onSearchMovieSubmit={handleSearchMovieSubmit} />
            : (
              <MovieDetails
                movie={chosenMovie}
                onBackButtonClick={() => toggleHeaderComponent(HeaderActiveComponent.Header)}
              />
            )}
          <Main
            movies={movies}
            onGenreClick={handleGenreClick}
            onMovieImageClick={handleMovieClick}
            onSortingSelect={handleSortingSelect}
          />
          <Footer />
          {chosenModal.type && <CoreModal />}
        </ModalContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
