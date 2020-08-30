import React from 'react';
import Logo from '@app/components/logo/logo.component';
import style from '@app/components/header/header.component.style';
import commonStyle from '@app/style/variables/sizes';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import cN from '@app/utils/utils';

const Header = (): JSX.Element => {
  const { header, headerContainer, logoContainer, addMovieButtonContainer } = style();
  const { appContainer } = commonStyle();

  /* eslint-disable no-console */
  return (
    <header className={header}>
      <div className={cN(appContainer, headerContainer)}>
        <div className={logoContainer}>
          <Logo />
        </div>
        <div className={addMovieButtonContainer}>
          <Button
            type={ButtonType.add}
            callback={() => { console.log('hello'); }}
          />
        </div>
      </div>
    </header>
  );
  /* eslint-enable no-console */
};

export default Header;
