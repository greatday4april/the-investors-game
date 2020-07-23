import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import '../../../app/javascript/helpers/initFA';

import { combineReducers, createStore } from 'redux';

import App from './App';
import Main from './Main';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const timeReducer = (state=0, action) => {
  switch (action.type) {
    case 'TICK':
      return action.currentTime;
    default:
      return state;
  }
};

const store = createStore(combineReducers({ currentTime: timeReducer }));

window.store = store;

const Root = ({ store }) => {
  return <Provider store={store}>
    <Main>
      <App store={store} />
    </Main>
  </Provider>;
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store}/>, document.body.appendChild(document.createElement('div')));
});
