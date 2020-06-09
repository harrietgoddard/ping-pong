import React from "react";
import Header from './components/Header/'
import ScoreCard1 from './components/ScoreCard/ScoreCard1';
import ScoreCard2 from './components/ScoreCard/ScoreCard2';
import Winner from './components/Winner/';
import Button from './components/Button/'
import Results from './components/Results/';

const App = ({ handlePlayer1, handlePlayer2, handleReset, handleLanguage }) => (
    <React.Fragment>

        <Header
        handleLanguage={ handleLanguage } 
        />

        <div className="row mb-4">
            <ScoreCard1
              id={ 1 }
              handlePlayer={ handlePlayer1 } 
            />
            <ScoreCard2
              id={ 2 }
              handlePlayer={ handlePlayer2 }  
            />
        </div>

        <Winner />

        <hr />

        <Button 
        handleReset={ handleReset }/>

        <Results />

    </React.Fragment>
);

export default App;
