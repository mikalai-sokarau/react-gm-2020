import React, {
  useState, FC, lazy, Suspense,
} from 'react';
import store from '@app/store/store';
import { StoreContext } from 'storeon/react';
import useStyle from '@app/components/app/app.component.styles';
import NotFound from '@app/components/notFound/notFound.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoreModal from '@app/components/modals/coreModal/coreModal.component';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';
import { IModalContext, ModalContext } from '@shared/interfaces/coreModal.context';

const Main = lazy(() => import('@app/components/main/main.component'));
const Header = lazy(() => import('@app/components/header/header.component'));
const Footer = lazy(() => import('@app/components/footer/footer.component'));

const App: FC = () => {
  const classes = useStyle();
  const [chosenModal, setChosenModal] = useState<IModalContext>({ type: null });

  if (chosenModal.actionType) {
    setChosenModal({ type: chosenModal.type });
  }

  return (
    <Router>
      <div className={classes.core}>
        <ErrorBoundary>
          <StoreContext.Provider value={store}>
            <ModalContext.Provider value={{ chosenModal, setChosenModal }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route
                    path={['/', '/movie/:id', '/search/:text']}
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
          </StoreContext.Provider>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
