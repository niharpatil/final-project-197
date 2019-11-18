import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './components/App';
import reducer from './reducer/index';

// Enables asynchronous actions. Docs here: https://github.com/reduxjs/redux-thunk
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // Provider enables descendant react components to access redux store and dispatch actions to redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app')
);
