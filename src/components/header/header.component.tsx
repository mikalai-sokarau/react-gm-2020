import cN from 'classnames';
import ROUTES from '@app/routes';
import withStyles from 'react-jss';
import { useStoreon } from 'storeon/react';
import commonStyles from '@app/style/variables/sizes';
import Logo from '@app/components/logo/logo.component';
import {
  Route, Switch, useHistory, useParams,
} from 'react-router-dom';
import { Genres } from '@shared/interfaces/movies.model';
import Button from '@app/components/button/button.component';
import { ModalType } from '@shared/interfaces/coreModal.interface';
import React, {
  useState, useContext, FC, useEffect,
} from 'react';
import styles from '@app/components/header/header.component.style';
import { ModalContext } from '@shared/interfaces/coreModal.context';
import { ButtonType } from '@app/components/button/button.interface';
import { ActionType, IState, StoreModule } from '@app/store/store.interface';
import MovieDetails from '@app/components/movieDetails/movieDetails.component';

const Header: FC<{ classes: { [key: string]: string } }> = ({ classes: s }) => {
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
  }, [text]);

  return (
    <Switch>
      <Route path={`${ROUTES.MOVIE_DETAILS}:id`} component={MovieDetails} />
      <Route
        path="/"
        render={() => (
          <header className={s.header}>
            <div className={cN(s.appContainer, s.headerContainer)}>
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

export default withStyles({ ...styles, ...commonStyles })(Header);
