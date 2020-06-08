import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";


const initial = {
  player1: 0,
  player2: 0,
  player1Serves: true,
  winner: 0,
  results: [],
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
  if (state.player1 === 20 && state.player2 === 20) {
    return {
      ...state,
      player1Serves: !state.player1Serves
    }
  } else if (total % 5 === 0) {
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

const addResult = state => {
  if (state.winner) {
    return {
      ...state,
      results: [
        ...state.results,
        {
          player_1: {
            score: state.player1,
            won: state.winner === 1
          },
          player_2: {
            score: state.player2,
            won: state.winner === 2
          }
        }
      ],
    }
  } else {
    return state;
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT_PLAYER_1": return addResult(won(server(player1Scores(state))));
    case "INCREMENT_PLAYER_2": return addResult(won(server(player2Scores(state))));
    case "RESET": return { ...initial, results: state.results };
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
        results={ state.results }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

  console.log(state.results);
}

store.subscribe(render);
render();



