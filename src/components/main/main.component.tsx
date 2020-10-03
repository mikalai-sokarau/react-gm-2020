import React, { FC } from 'react';
import useCommonStyle from '@app/style/variables/sizes';
import IMain from '@app/components/main/main.interface';
import useStyle from '@app/components/main/main.component.style';
import MoviesList from '@app/components/moviesList/moviesList.component';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';

const Main: FC<IMain> = ({ onGenreClick, onMovieImageClick }) => {
  const classes = useStyle();
  const { appContainer } = useCommonStyle();

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        <PreferenceBar onGenreClick={onGenreClick} />
        <MoviesList onMovieImageClick={onMovieImageClick} />
      </div>
    </main>
  );
};

export default Main;
