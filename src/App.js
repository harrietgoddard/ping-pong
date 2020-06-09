import React from "react";
import ScoreCard from "./components/ScoreCard/ScoreCard";
import ScoreCard1 from './components/ScoreCard/ScoreCard1';
import ScoreCard2 from './components/ScoreCard/ScoreCard2';
import Winner from "./components/Winner";
import Results from "./components/Results";

const App = ({ player1, player2, player1Serves, winner, results, handlePlayer1, handlePlayer2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <ScoreCard1
              label={ "Player 1"}
              player={ player1 }
              player1Serves={ player1Serves }
              winner={ winner }
              handlePlayer={ handlePlayer1 } 
            />
            <ScoreCard2
              label={ "Player 2"}
              player={ player2 }
              player1Serves={ !player1Serves }
              winner={ winner }
              handlePlayer={ handlePlayer2 }  
            />
        </div>

        <Winner
          player1={ player1 }
          player2={ player2 } 
          winner={ winner }  
        />

        <hr />

        { /* reset button */}
        <button 
          className="btn btn-danger"
          onClick={ handleReset }
        >Reset</button>

        <Results
          results={ results } 
        />

    </React.Fragment>
);

export default App;
