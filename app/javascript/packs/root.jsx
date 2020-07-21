import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import '../../../app/javascript/helpers/initFA';

const Root = () => (
  <Main>
    <App />
  </Main>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.body.appendChild(document.createElement('div')));
});
