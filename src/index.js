import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

const render = () => { //remove
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

}

store.subscribe(render); //remove
render(); //remove



