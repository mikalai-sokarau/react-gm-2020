import React from 'react';
import Logo from '@app/components/logo/logo.component';
import style from '@app/components/header/header.component.style';
import commonStyle from '@app/style/variables/sizes';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import cN from '@app/utils/utils';

const Header = (): JSX.Element => {
  const s = style();
  const { appContainer } = commonStyle();

  return (
    <header className={s.header}>
      <div className={cN(appContainer, s.headerContainer)}>
        <div className={s.logoContainer}>
          <Logo />
        </div>
        <div className={s.addMovieButtonContainer}>
          <Button
            type={ButtonType.add}
            callback={() => console.log('hello')}
          />
        </div>
        <div className={s.searchContainer}>
          <h2 className={s.searchTitle}>find your movie</h2>
          <div className={s.inputContainer}>
            <input type="text" placeholder="What do you want to watch?" className={s.searchInput} />
            <Button
              type={ButtonType.search}
              callback={() => console.log('hello')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
