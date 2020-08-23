import React from 'react';
import styles from '@app/components/app/app.component.styles';

const App = (): JSX.Element => {
  const classes = styles();

  return <div className={classes.core}>Hello World!</div>;
};

export default App;
