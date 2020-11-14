import ROUTES from 'src/routes';
import withStyles from 'react-jss';
import React, { useState, FC } from 'react';
import { StoreContext } from 'storeon/react';
import HomePage from '@app/pages/Home/home.page';
import { Route, Switch } from 'react-router-dom';
import IApp from '@app/components/app/app.interface';
import SearchPage from '@app/pages/Search/search.page';
import Footer from '@app/components/footer/footer.component';
import NotFoundPage from '@app/pages/NotFound/notFound.page';
import styles from 'src/components/app/app.component.styles';
import MovieDetailsPage from '@app/pages/MovieDetails/movieDetails.page';
import CoreModal from '@app/components/modals/coreModal/coreModal.component';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';
import { IModalContext, ModalContext } from '@shared/interfaces/coreModal.context';

const App: FC<IApp> = ({
  Router, store, location, context, classes,
}) => {
  const [chosenModal, setChosenModal] = useState<IModalContext>({ type: null });

  if (chosenModal.actionType) {
    setChosenModal({ type: chosenModal.type });
  }

  return (
    <Router location={location} context={context}>
      <StoreContext.Provider value={store}>
        <div className={classes.core}>
          <ErrorBoundary>
            <ModalContext.Provider value={{ chosenModal, setChosenModal }}>
              <Switch>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.MOVIE_DETAILS} component={MovieDetailsPage} />
                <Route path={ROUTES.SEARCH} component={SearchPage} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
              <Footer />
              {chosenModal.type && <CoreModal />}
            </ModalContext.Provider>
          </ErrorBoundary>
        </div>
      </StoreContext.Provider>
    </Router>
  );
};

export default withStyles(styles)(App);
