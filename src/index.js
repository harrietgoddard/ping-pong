import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './data/store';
import { Provider } from 'react-redux';
import { connect } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const mapStateToProps = ({ gameStarted }) => ({ gameStarted });

export default connect(mapStateToProps)(App);





