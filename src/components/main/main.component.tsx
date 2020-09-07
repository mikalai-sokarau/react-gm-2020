import React from 'react';
import commonStyle from '@app/style/variables/sizes';
import IMain from '@app/components/main/main.interface';
import style from '@app/components/main/main.component.style';
import MoviesList from '@app/components/moviesList/moviesList.component';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';

const Main = ({ movies, onGenreClick }: IMain): JSX.Element => {
  const classes = style();
  const { appContainer } = commonStyle();

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        <PreferenceBar onGenreClick={onGenreClick} />
        <MoviesList movies={movies} />
      </div>
    </main>
  );
};

export default Main;
