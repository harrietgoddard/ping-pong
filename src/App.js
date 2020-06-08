import React from "react";
import ScoreCard from "./components/ScoreCard";

const App = ({ player1, player2, player1Serves, winner, handlePlayer1, handlePlayer2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <ScoreCard
              player={ player1 }
              player1Serves={ player1Serves }
              winner={ winner }
              handlePlayer={ handlePlayer1 } 
            />
            <ScoreCard
              player={ player2 }
              player1Serves={ !player1Serves }
              winner={ winner }
              handlePlayer={ handlePlayer2 }  
            />
        </div>

        { winner && Math.abs(player1 - player2) > 1 ? 
        <h2 className="alert alert-success">Player { winner } wins!</h2> : null }

        <hr />

        { /* reset button */}
        <button 
          className="btn btn-danger"
          onClick={ handleReset }
        >Reset</button>
    </React.Fragment>
);

export default App;
