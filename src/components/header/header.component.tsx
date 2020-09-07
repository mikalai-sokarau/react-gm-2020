import cN from '@app/utils/utils';
import React, { useState, FC } from 'react';
import commonStyle from '@app/style/variables/sizes';
import Logo from '@app/components/logo/logo.component';
import Button from '@app/components/button/button.component';
import IHeader from '@app/components/header/header.interface';
import style from '@app/components/header/header.component.style';
import { ButtonType } from '@app/components/button/button.interface';

const Header: FC<IHeader> = ({ onSearchMovieSubmit }) => {
  const s = style();
  const { appContainer } = commonStyle();
  const [inputText, setInputText] = useState('');

  const inputKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputText((e.target as HTMLInputElement).value);

    if (e.key === 'Enter') {
      onSearchMovieSubmit(inputText);
    }
  };

  return (
    <header className={s.header}>
      <div className={cN(appContainer, s.headerContainer)}>
        <div className={s.logoContainer}>
          <Logo />
        </div>
        <div className={s.addMovieButtonContainer}>
          <Button
            type={ButtonType.add}
            onButtonClick={() => alert('Not implemented yet.')}
          />
        </div>
        <div className={s.searchContainer}>
          <h2 className={s.searchTitle}>find your movie</h2>
          <div className={s.inputContainer}>
            <input
              type="text"
              placeholder="What do you want to watch?"
              className={s.searchInput}
              onKeyUp={inputKeyPressHandler}
            />
            <Button
              type={ButtonType.search}
              onButtonClick={() => onSearchMovieSubmit(inputText)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
