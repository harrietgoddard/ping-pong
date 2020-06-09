import React from "react";
import englishDictionary from '../../data/english.json';
import esperantoDictionary from '../../data/esperanto.json';

const Button = ({ english, handleReset }) => {
    
  let language = english ? englishDictionary : esperantoDictionary;

  return (
        <button 
          className="btn btn-danger"
          onClick={ handleReset }
        >{ language.reset }</button>
    )
}

export default Button;