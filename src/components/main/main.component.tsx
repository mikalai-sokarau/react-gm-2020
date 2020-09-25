import React, { FC, useCallback } from 'react';
import useCommonStyle from '@app/style/variables/sizes';
import IMain from '@app/components/main/main.interface';
import useStyle from '@app/components/main/main.component.style';
import MovieItem from '@app/components/movieItem/movieItem.component';
import MoviesList from '@app/components/moviesList/moviesList.component';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';

const Main: FC<IMain> = ({
  movies, onGenreClick, onMovieImageClick, onSortingSelect,
}) => {
  const classes = useStyle();
  const { appContainer } = useCommonStyle();
  const getMovies = useCallback(() => movies.map((m) => (
    <MovieItem
      movie={m}
      key={m.id}
      onMovieImageClick={() => onMovieImageClick(m)}
    />
  )), [movies]);

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        <PreferenceBar
          onGenreClick={onGenreClick}
          onSortingSelect={onSortingSelect}
        />
        <MoviesList getMovies={getMovies} />
      </div>
    </main>
  );
};

export default Main;
