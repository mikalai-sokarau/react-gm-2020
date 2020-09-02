import React from 'react';
import Logo from '@app/components/logo/logo.component';
import style from '@app/components/header/header.component.style';
import commonStyle from '@app/style/variables/sizes';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import cN from '@app/utils/utils';

const Header = (): JSX.Element => {
  const c = style(); // c: "classes"
  const { appContainer } = commonStyle();

  /* eslint-disable no-console */
  return (
    <header className={c.header}>
      <div className={cN(appContainer, c.headerContainer)}>
        <div className={c.logoContainer}>
          <Logo />
        </div>
        <div className={c.addMovieButtonContainer}>
          <Button
            type={ButtonType.add}
            callback={() => console.log('hello')}
          />
        </div>
        <div className={c.searchContainer}>
          <h2 className={c.searchTitle}>find your movie</h2>
          <div className={c.inputContainer}>
            <input type="text" placeholder="What do you want to watch?" className={c.searchInput} />
            <Button
              type={ButtonType.search}
              callback={() => console.log('hello')}
            />
          </div>
        </div>
      </div>
    </header>
  );
  /* eslint-enable no-console */
};

export default Header;
