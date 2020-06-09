import React from "react";
import englishDictionary from '../../data/english.json';
import esperantoDictionary from '../../data/esperanto.json';

const Winner = ({ player1, player2, winner, english }) => {
    
    let language = english ? englishDictionary : esperantoDictionary;

    return (
        winner ? 
            <h2 className="alert alert-success">
                { `${language.player} ${winner} ${language.wins}!` }
            </h2> : null
    )
}

export default Winner;