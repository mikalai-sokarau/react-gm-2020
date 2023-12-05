import useStyle from '@app/components/app/app.component.styles';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';
import CoreModal from '@app/components/modals/coreModal/coreModal.component';
import NotFound from '@app/components/notFound/notFound.component';
import ROUTES from '@app/routes';
import { ActionType } from '@app/store/store.interface';
import { IModalContext, ModalContext } from '@shared/interfaces/coreModal.context';
import React, {
  FC, lazy, Suspense, useEffect, useState,
} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useStoreon } from 'storeon/react';

const Main = lazy(() => import('@app/components/main/main.component'));
const Header = lazy(() => import('@app/components/header/header.component'));
const Footer = lazy(() => import('@app/components/footer/footer.component'));

const App: FC = () => {
  const classes = useStyle();
  const { dispatch } = useStoreon();
  const { pathname } = useLocation();
  const [chosenModal, setChosenModal] = useState<IModalContext>({ type: null });

  if (chosenModal.actionType) {
    setChosenModal({ type: chosenModal.type });
  }

  useEffect(() => {
    if (pathname === ROUTES.HOME) {
      dispatch(ActionType.resetState);
    }
  }, [pathname]);

  return (
    <div className={classes.core}>
      <ErrorBoundary>
        <ModalContext.Provider value={{ chosenModal, setChosenModal }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                path={[ROUTES.HOME, `${ROUTES.MOVIE_DETAILS}:id`, `${ROUTES.SEARCH}:text`]}
                exact
                render={() => (
                  <>
                    <Header />
                    <Main />
                  </>
                )}
              />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
            {chosenModal.type && <CoreModal />}
          </Suspense>
        </ModalContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
