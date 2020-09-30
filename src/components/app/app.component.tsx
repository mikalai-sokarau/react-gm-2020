import store from '@app/store/store';
import React, { useState, FC } from 'react';
import { StoreContext } from 'storeon/react';
import Main from '@app/components/main/main.component';
import MoviesService from '@server/services/movies.service';
import Header from '@app/components/header/header.component';
import Footer from '@app/components/footer/footer.component';
import useStyle from '@app/components/app/app.component.styles';
import CoreModal from '@app/components/modals/coreModal/coreModal.component';
import MovieDetails from '@app/components/movieDetails/movieDetails.component';
import HeaderActiveComponent from '@app/components/app/app.component.interface';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';
import { IModalContext, ModalContext } from '@shared/interfaces/coreModal.context';
import { Genres, IMovie, IMovieSortOptions } from '@shared/interfaces/movies.model';
import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';

const App: FC = () => {
  const classes = useStyle();
  const [searchText, setSearchText] = useState('');
  const [chosenMovie, setChosenMovie] = useState(null);
  const [chosenGenre, setChosenGenre] = useState(Genres.All);
  const [serviceMovies, setMovies] = useState(MoviesService.movies);
  const [chosenSortOption, setChosenSortOption] = useState(IMovieSortOptions.title);
  const [headerComponent, toggleHeaderComponent] = useState(HeaderActiveComponent.Header);
  const [chosenModal, setChosenModal] = useState<IModalContext>({ type: null });

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
    const sortedMovies = MoviesService.sortMovies(value, serviceMovies);
    setChosenSortOption(value);
    setMovies(sortedMovies);
  };

  if (chosenModal.actionType) {
    MoviesService.reactToModalAction(chosenModal.actionType, chosenModal.movie);
    setChosenModal({ type: chosenModal.type });
    setMovies(MoviesService.movies);
    toggleHeaderComponent(HeaderActiveComponent.Header);
  }

  return (
    <div className={classes.core}>
      <ErrorBoundary>
        <StoreContext.Provider value={store}>
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
              onGenreClick={handleGenreClick}
              onMovieImageClick={handleMovieClick}
              onSortingSelect={handleSortingSelect}
            />
            <Footer />
            {chosenModal.type && <CoreModal />}
          </ModalContext.Provider>
        </StoreContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
