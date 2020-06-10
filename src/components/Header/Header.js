import React from "react";
import englishDictionary from '../../data/english.json';
import esperantoDictionary from '../../data/esperanto.json';

const Header = ({ english, handleLanguage }) => {
    
    let language = english ? englishDictionary : esperantoDictionary;

    return (
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
            <p
            onClick={ handleLanguage }
            style={{ cursor: "pointer" }}
            >{ language.language }</p>
        </header>
    )
}

export default Header;