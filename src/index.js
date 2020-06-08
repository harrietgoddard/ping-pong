import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";


const initial = {
  player1: 0,
  player2: 0,
  player1Serves: true,
  winner: 0
};

const player1Scores = state => {
  return {
    ...state,
    player1: state.player1 + 1
  }
}

const player2Scores = state => {
  return {
    ...state,
    player2: state.player2 + 1
  }
}

const server = state => {
  let total = state.player1 + state.player2;
  if (total % 5 === 0) {
    return {
      ...state,
      player1Serves: !state.player1Serves
    }
  } else {
    return state;
  }
}

const won = state => {
  if (state.player1 === 21) {
    return {
      ...state,
      winner: 1
    }
  } else if (state.player2 === 21) {
    return {
      ...state,
      winner: 2
    }
  } else {
    return state;
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT_PLAYER_1": return won(server(player1Scores(state)));
    case "INCREMENT_PLAYER_2": return won(server(player2Scores(state)));
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
        player1Serves={ state.player1Serves }
        winner={ state.winner }
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



