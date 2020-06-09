import React from "react";
import englishDictionary from '../../english.json';
import esperantoDictionary from '../../esperanto.json';

const Header = ({ english, handleLanguage }) => {
    return (
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
            <p
            onClick={ handleLanguage }
            >{ english ? englishDictionary.language : esperantoDictionary.language}</p>
        </header>
    )
}

export default Header;