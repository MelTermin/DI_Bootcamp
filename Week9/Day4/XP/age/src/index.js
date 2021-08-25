import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {reducer} from './redux/reducers';
import reportWebVitals from './reportWebVitals';

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(
        `caught in the middleware ${JSON.stringify(store.getState())}`
      );
      return result;
    };
  };
};


const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
