import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import '../../../app/javascript/helpers/initFA';
import configureStore from '../store/store';
import { fetchAllTicks } from '../actions/tick_actions';

const Root = ({ store }) => (
  <Provider store={store}>
    <Main>
      <App />
    </Main>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { ...localStorage };
  const store = configureStore(preloadedState);
  window.fetchAllTicks = fetchAllTicks;
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.body.appendChild(document.createElement('div')));
});
