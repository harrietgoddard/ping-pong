import React from "react";
import englishDictionary from '../../english.json';
import esperantoDictionary from '../../esperanto.json';

const Winner = ({ player1, player2, winner, english }) => {
    
    let language = english ? englishDictionary : esperantoDictionary;

    return (
        winner && Math.abs(player1 - player2) > 1 ? 
            <h2 className="alert alert-success">
                { `${language.player} ${winner} ${language.wins}!` }
            </h2> : null
    )
}

export default Winner;