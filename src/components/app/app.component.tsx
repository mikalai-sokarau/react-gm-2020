import React, { useState } from 'react';
import { Genres } from '@app/mockData/movies.model';
import Main from '@app/components/main/main.component';
import MoviesService from '@app/services/movies.service';
import style from '@app/components/app/app.component.styles';
import Header from '@app/components/header/header.component';
import Footer from '@app/components/footer/footer.component';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';

const App = (): JSX.Element => {
  const classes = style();
  const [movies, setMovies] = useState(MoviesService.movies);
  const [searchText, setSearchText] = useState('');
  const [chosenGenre, setChosenGenre] = useState(Genres.All);

  const handleSearchMovieSubmit = (text: string) => {
    setSearchText(text);
    setMovies(MoviesService.filterMovies(text, chosenGenre));
  };
  const mainCallback = (genre: Genres) => {
    setChosenGenre(genre);
    setMovies(MoviesService.filterMovies(searchText, genre));
  };

  return (
    <div className={classes.core}>
      <ErrorBoundary>
        <Header onSearchMovieSubmit={handleSearchMovieSubmit} />
        <Main
          movies={movies}
          callback={mainCallback}
        />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
