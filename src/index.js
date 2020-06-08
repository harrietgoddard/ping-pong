import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, bindActionCreators } from "redux";


const initial = {
  player1: 0,
  player2: 0,
};

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT_PLAYER_1": return { ...state, player1: state.player1 + 1 };
    case "INCREMENT_PLAYER_2": return { ...state, player2: state.player2 + 1 };
    case "RESET": return initial;
    default: return state;
  }
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
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        handlePlayer1={ () => store.dispatch({ type: "INCREMENT_PLAYER_1" }) }
        handlePlayer2={ () => store.dispatch({ type: "INCREMENT_PLAYER_2" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

store.subscribe(render);
render();



