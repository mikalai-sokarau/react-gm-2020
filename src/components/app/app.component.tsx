import React from 'react';
import style from '@app/components/app/app.component.styles';
import Main from '@app/components/main/main.component';
import Header from '@app/components/header/header.component';
import Footer from '@app/components/footer/footer.component';

const App = (): JSX.Element => {
  const classes = style();

  return (
    <div className={classes.core}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
