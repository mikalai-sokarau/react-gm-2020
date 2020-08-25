import React from 'react';
import style from '@app/components/header/header.component.style';

const Header = (): JSX.Element => {
  const classes = style();

  return (
    <header className={classes.core}>
      header
    </header>
  );
};

export default Header;
