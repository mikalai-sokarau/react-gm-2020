import React from 'react';
import commonStyle from '@app/style/variables/sizes';
import style from '@app/components/main/main.component.style';
import PreferenceBar from '@app/components/preferenceBar/preferenceBar.component';

const Main = (): JSX.Element => {
  const classes = style();
  const { appContainer } = commonStyle();

  return (
    <main className={classes.core}>
      <div className={appContainer}>
        <PreferenceBar />
      </div>
    </main>
  );
};

export default Main;
