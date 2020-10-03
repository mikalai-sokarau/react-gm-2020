import cN from 'classnames';
import { useStoreon } from 'storeon/react';
import Logo from '@app/components/logo/logo.component';
import React, { useState, useContext, FC } from 'react';
import useCommonStyle from '@app/style/variables/sizes';
import Button from '@app/components/button/button.component';
import { ModalType } from '@shared/interfaces/coreModal.interface';
import { ModalContext } from '@shared/interfaces/coreModal.context';
import useStyle from '@app/components/header/header.component.style';
import { ButtonType } from '@app/components/button/button.interface';

const Header: FC = () => {
  const s = useStyle();
  const { appContainer } = useCommonStyle();
  const { dispatch, search } = useStoreon('search');
  const [inputText, setInputText] = useState(search.text);
  const { setChosenModal } = useContext(ModalContext);

  const inputKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputText((e.target as HTMLInputElement).value);

    if (e.key === 'Enter') {
      dispatch('/search/text', inputText);
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
            onButtonClick={() => setChosenModal({ type: ModalType.Add })}
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
              onButtonClick={() => dispatch('/search/text', inputText)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
