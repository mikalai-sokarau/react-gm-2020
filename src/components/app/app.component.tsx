import React, { useState, FC } from 'react';
import { Genres, IMovie } from '@app/mockData/movies.model';
import Main from '@app/components/main/main.component';
import MoviesService from '@app/services/movies.service';
import Header from '@app/components/header/header.component';
import Footer from '@app/components/footer/footer.component';
import useStyle from '@app/components/app/app.component.styles';
import MovieDetails from '@app/components/movieDetails/movieDetails.component';
import HeaderActiveComponent from '@app/components/app/app.component.interface';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';

const App: FC<Record<string, unknown>> = () => {
  const classes = useStyle();
  const [movies, setMovies] = useState(MoviesService.movies);
  const [searchText, setSearchText] = useState('');
  const [chosenGenre, setChosenGenre] = useState(Genres.All);
  const [chosenMovie, setChosenMovie] = useState(null);
  const [headerComponent, toggleHeaderComponent] = useState(HeaderActiveComponent.Header);

  const handleSearchMovieSubmit = (text: string) => {
    setSearchText(text);
    setMovies(MoviesService.filterMovies(text, chosenGenre));
  };
  const handleGenreClick = (genre: Genres) => {
    setChosenGenre(genre);
    setMovies(MoviesService.filterMovies(searchText, genre));
  };
  const handleMovieClick = (movie: IMovie) => {
    setChosenMovie(movie);
    toggleHeaderComponent(HeaderActiveComponent.MovieDetails);
  };

  return (
    <div className={classes.core}>
      <ErrorBoundary>
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
        />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
