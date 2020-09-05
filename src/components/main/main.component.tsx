import React from 'react';
import movies from '@app/mockData/movies';
import commonStyle from '@app/style/variables/sizes';
import style from '@app/components/main/main.component.style';
import MoviesList from '@app/components/moviesList/moviesList.component';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';

const Main = (): JSX.Element => {
  const classes = style();
  const { appContainer } = commonStyle();

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        <PreferenceBar />
        <MoviesList movies={movies} />
      </div>
    </main>
  );
};

export default Main;
