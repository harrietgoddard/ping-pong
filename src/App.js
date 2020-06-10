import React from "react";
import Header from './components/Header/'
import ScoreCard1 from './components/ScoreCard/ScoreCard1';
import ScoreCard2 from './components/ScoreCard/ScoreCard2';
import Winner from './components/Winner/';
import Button from './components/Button/ResetButton'
import Results from './components/Results/';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './components/Form/';

const App = ({ handlePlayer1, handlePlayer2, handleReset, handleLanguage }) => (
    <Router>

        <Header />

        <Route exact path="/">
          <Form />
        </Route>

        <Route exact path="/game">

          <div className="row mb-4">
              <ScoreCard1
                id={ 1 }
              />
              <ScoreCard2
                id={ 2 } 
              />
          </div>

          <Winner />

          <hr />

          <Button
            name={ "reset" }
          />

          <Results />
        
        </Route>

    </Router>
);

export default App;
