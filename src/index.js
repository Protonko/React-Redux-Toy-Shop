import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './assets/scss/style.scss';
import store from './store';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
