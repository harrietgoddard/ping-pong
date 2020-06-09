import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
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
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );






