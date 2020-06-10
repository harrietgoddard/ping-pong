import React from "react";
import englishDictionary from '../../data/english.json';
import esperantoDictionary from '../../data/esperanto.json';

const Winner = ({ player1, player2, p1Name, p2Name, winner, english }) => {
    
    let language = english ? englishDictionary : esperantoDictionary;

    let winnerName = winner === 1 ? p1Name : p2Name;

    return (
        winner ? 
            <h2 className="alert alert-success">
                { `${winnerName} ${language.wins}!` }
            </h2> : null
    )
}

export default Winner;