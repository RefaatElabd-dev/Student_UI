import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchStudents } from './actions/student.actions.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchStudents());

export const history = createBrowserHistory({forceRefresh: true});


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
