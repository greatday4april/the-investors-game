import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import '../../../app/javascript/helpers/initFA';

import { loadState, saveState } from '../store/localStorage';

import App from './App';
import Main from './Main';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import { fetchTicks } from '../actions/tick_actions';
import * as TransactionsAction from '../actions/transactionsAction';
import {fetchNewsItems} from '../utils/news_api_utils';
import moment from 'moment-timezone';
import throttle from 'lodash/throttle';

const Root = ({ store }) => (
  <Provider store={store}>
    <Main>
      <App />
    </Main>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  moment.tz.setDefault('America/New_York');
  const preloadedState = loadState();
  const store = configureStore(preloadedState);
  store.subscribe(
    throttle(() => {
      saveState({
        transactions: store.getState().transactions,
        previousRewardTime: store.getState().previousRewardTime,
        level: store.getState().level
      });
    }, 20000)
  );
  window.fetchTicks = fetchTicks;
  window.store = store;
  window.sellStock = TransactionsAction.sellStock;
  window.buyStock = TransactionsAction.buyStock;
  window.fetchNewsItems = fetchNewsItems;
  ReactDOM.render(<Root store={store} />, document.body.appendChild(document.createElement('div')));
});
