import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '@app/store/store';
import App from '@app/components/app/app.component';
import 'src/index.css'; // TODO: import styles directly into index.html using webpack

ReactDOM.hydrate(
  <App Router={BrowserRouter} store={configureStore()} />,
  document.querySelector('#root'),
  () => {
    // because of server and brower jss styles conflicts
    // https://cssinjs.org/server-side-rendering
    const ssStyles = document.getElementById('server-side-styles');
    ssStyles.parentNode.removeChild(ssStyles);
  },
);
