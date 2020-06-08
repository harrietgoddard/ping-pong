import React from "react";
import ScoreCard from "./components/ScoreCard";

const App = ({ player1, player2, player1Serves, winner, results, handlePlayer1, handlePlayer2, handleReset }) => (
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

        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Game</th>
              <th scope="col">Player 1</th>
              <th scope="col">Player 2</th>
              <th scope="col">Winner</th>
            </tr>
          </thead>
          <tbody>
            { results.map((result, index) => (
                <tr key={ index }>
                  <th scope="row">{ index + 1}</th>
                  <td>{ result.player_1.score }</td>
                  <td>{ result.player_2.score }</td>
                  <td>{ result.player_1.won === true ? "Player 1" : "Player 2" }</td>
                </tr>
              )
            )}
          </tbody>
        </table>
    </React.Fragment>
);

export default App;
