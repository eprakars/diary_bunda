import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { StoreProvider, createStore } from "easy-peasy";
import models from "./redux/models";

const store = createStore(models);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
