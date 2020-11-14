import React, { FC } from 'react';
import withStyles from 'react-jss';
import commonStyles from '@app/style/variables/sizes';
import styles from '@app/components/main/main.component.style';
import MoviesList from '@app/components/moviesList/moviesList.component';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';

const Main: FC<
{ classes?: { [key: string]: string } }
> = ({ classes }) => (
  <main className={classes.core}>
    <div className={classes.appContainer}>
      <PreferenceBar />
      <MoviesList />
    </div>
  </main>
);

export default withStyles({ ...styles, ...commonStyles })(Main);
