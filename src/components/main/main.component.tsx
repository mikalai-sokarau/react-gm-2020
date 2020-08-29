import React from 'react';
import commonStyle from '@app/style/variables/sizes';
import style from '@app/components/main/main.component.style';

const Main = (): JSX.Element => {
  const classes = style();
  const { appContainer } = commonStyle();

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        main
      </div>
    </main>
  );
};

export default Main;
