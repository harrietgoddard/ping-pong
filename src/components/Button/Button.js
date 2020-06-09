import React from "react";
import englishDictionary from '../../english.json';
import esperantoDictionary from '../../esperanto.json';

const Button = ({ english, handleReset }) => {
    return (
        <button 
          className="btn btn-danger"
          onClick={ handleReset }
        >{ english ? englishDictionary.reset : esperantoDictionary.reset }</button>
    )
}

export default Button;