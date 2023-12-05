import App from '@app/components/app/app.component';
import store from '@app/store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreContext } from 'storeon/react';

import 'src/index.css'; // TODO: import styles directly into index.html using webpack

ReactDOM.render(
  <Router>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.querySelector('#root'),
);
