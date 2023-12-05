import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import useStyle from '@app/components/header/header.component.style';
import Logo from '@app/components/logo/logo.component';
import MovieDetails from '@app/components/movieDetails/movieDetails.component';
import ROUTES from '@app/routes';
import { ActionType, IState, StoreModule } from '@app/store/store.interface';
import useCommonStyle from '@app/style/variables/sizes';
import { ModalContext } from '@shared/interfaces/coreModal.context';
import { ModalType } from '@shared/interfaces/coreModal.interface';
import { Genres } from '@shared/interfaces/movies.model';
import cN from 'classnames';
import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import {
  Route, Switch, useHistory, useParams,
} from 'react-router-dom';
import { useStoreon } from 'storeon/react';

const Header: FC = () => {
  const s = useStyle();
  const { appContainer } = useCommonStyle();
  const { text } = useParams<{ text: string }>();
  const { dispatch, search } = useStoreon<IState>(StoreModule.search);
  const [inputText, setInputText] = useState(search.text);
  const { setChosenModal } = useContext(ModalContext);
  const history = useHistory();
  const submitSearch = () => {
    if (inputText !== text) {
      history.push(inputText ? `${ROUTES.SEARCH}${inputText}` : ROUTES.HOME);
      dispatch(ActionType.getMovies, { ...search, text: inputText, genre: Genres.All });
    }
  };

  const inputKeyPressHandler = (({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      submitSearch();
    }
  });

  useEffect(() => {
    setInputText(text || '');

    if (!history.location.pathname.includes(ROUTES.MOVIE_DETAILS)) {
      dispatch(ActionType.getMovies, { ...search, text, genre: Genres.All });
    }
  }, [text]);

  return (
    <Switch>
      <Route path={`${ROUTES.MOVIE_DETAILS}:id`} component={MovieDetails} />
      <Route
        path="/"
        render={() => (
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
                    onChange={(({ target: { value } }) => setInputText(value))}
                    onKeyUp={inputKeyPressHandler}
                    value={inputText}
                  />
                  <Button
                    type={ButtonType.search}
                    onButtonClick={submitSearch}
                  />
                </div>
              </div>
            </div>
          </header>
        )}
      />
    </Switch>
  );
};

export default Header;
