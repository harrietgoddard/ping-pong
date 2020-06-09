import React from "react";
import englishDictionary from '../../english.json';
import esperantoDictionary from '../../esperanto.json';

const ScoreCard = ({ id, player, player1Serves, winner, english, handlePlayer }) => {
    return (

        <div className="col-md-6 mt-4">
            <div 
              className={ "card text-center " + (player1Serves ? "bg-dark text-white" : "") }
            >
                <h5 className="card-header">
                    { english ? englishDictionary.player + " " + id :
                    esperantoDictionary.player + " " + id }
                </h5>
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