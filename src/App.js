import React from "react";
import Header from './components/Header/'
import ScoreCard1 from './components/ScoreCard/ScoreCard1';
import ScoreCard2 from './components/ScoreCard/ScoreCard2';
import Winner from './components/Winner/';
import ResetButton from './components/Button/ResetButton'
import Results from './components/Results/';
import Form from './components/Form/';
import history from './history';
import { Router, Route } from "react-router-dom";

const App = ({ handlePlayer1, handlePlayer2, handleReset, handleLanguage }) => (
    <Router history={ history }>

        <Header />

        <Route exact path="/">
          <Form />
        </Route>

        <Route exact path="/game">

          <div className="row mb-4">
              <ScoreCard1 />
              <ScoreCard2 />
          </div>

          <Winner />

          <hr />

          <ResetButton
            name={ "reset" }
          />

          <Results />
        
        </Route>

    </Router>
);

export default App;
