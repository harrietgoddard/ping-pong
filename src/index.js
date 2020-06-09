import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './data/store';
import { Provider } from 'react-redux';


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App 
          handlePlayer1={ () => store.dispatch({ type: "INCREMENT_PLAYER_1" }) }
          handlePlayer2={ () => store.dispatch({ type: "INCREMENT_PLAYER_2" }) }
          handleReset={ () => store.dispatch({ type: "RESET" }) }
          handleLanguage={ () => store.dispatch({ type: "CHANGE_LANGUAGE" }) }
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );






