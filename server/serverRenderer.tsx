import React from 'react';
import configureStore from '@app/store/store';
import { renderToString } from 'react-dom/server';
import App from '@app/components/app/app.component';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { StaticRouter as Router } from 'react-router-dom';
import MovieService from '@server/services/movies.service';
import { DEFAULT_SEARCH_STATE } from '@app/store/store.interface';

const renderHTML = (app: string, preloadedState: string, sheets: string) =>
  `
    <!doctype html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="icon" href="assets/icons/favicon.ico" />
        <style type="text/css" id="server-side-styles">${sheets}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <p id="loading-msg" style="position:absolute;top:50%;left:50%;color:#f65261;font-size:32px;font-weight:800">Loading ...</p>
        <div id="root">${app}</div>
        <script>
          window.PRELOADED_STATE = ${preloadedState}

          const rootElem = document.getElementById("root");
          const loadingElem = document.getElementById("loading-msg");

          rootElem.style = "visibility:hidden";

          document.addEventListener("DOMContentLoaded", () => {
            loadingElem.style = "display:none";
            rootElem.style = "visibility:visible";
          });
        </script>
        <script src="/main.bundle.js"></script>
      </body>
    </html>
  `;

const getSearchText = (url: string): string => url.includes('/search/') ? url.replace('/search/', '') : '';

export const serverRenderer = (ctx: any): void => {
  const sheets = new SheetsRegistry();
  const text = getSearchText(ctx.request.url);
  const store = configureStore({
    movies: MovieService.getMovies({ text }),
    search: { ...DEFAULT_SEARCH_STATE, text },
  });
  const context = {
    url: undefined as string,
  };

  const renderRoot = () => (
    <JssProvider registry={sheets}>
      <App
        Router={Router}
        store={store}
        context={context}
        location={ctx.request.url}
      />
    </JssProvider>
  );

  renderToString(renderRoot());

  if (context.url) {
    ctx.status = 302;
    ctx.set('Location', context.url);
    return;
  }

  const htmlString = renderToString(renderRoot());
  const preloadedState = JSON.stringify(store.get());
  const appTemplate = renderHTML(htmlString, preloadedState, sheets.toString());

  ctx.body = appTemplate;
}
