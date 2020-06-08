import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";


const initial = {
  player1: 0,
  player2: 0,
};

const reducer = state => {
  return state;
}

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App player1={ state.player1 } player2={ state.player2 }/>
    </React.StrictMode>,
    document.getElementById('root')
  );

}

store.subscribe(render);
render();



