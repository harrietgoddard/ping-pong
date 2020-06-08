import React from "react";

const ScoreCard = ({ player, player1Serves, winner, handlePlayer }) => {
    return (

        <div className="col-md-6 mt-4">
            <div 
              className={ "card text-center " + (player1Serves ? "bg-dark text-white" : "") }
            >
                <h5 className="card-header">Player 1</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ player }</p>
                </div>
                <div className="card-footer">
                    <button 
                      className="form-control btn btn-success"
                      onClick={ handlePlayer }
                      disabled={ winner }
                    >+</button>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard;