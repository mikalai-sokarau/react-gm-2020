import useStyle from '@app/components/main/main.component.style';
import MoviesList from '@app/components/moviesList/moviesList.component';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';
import useCommonStyle from '@app/style/variables/sizes';
import React, { FC } from 'react';

const Main: FC = () => {
  const classes = useStyle();
  const { appContainer } = useCommonStyle();

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        <PreferenceBar />
        <MoviesList />
      </div>
    </main>
  );
};

export default Main;
