import React from "react";
import englishDictionary from '../../data/english.json';
import esperantoDictionary from '../../data/esperanto.json';

const Button = ({ english, handleClick, name }) => {
    
  let language = english ? englishDictionary : esperantoDictionary;

  return (
        <button 
          className="btn btn-danger"
          onClick={ handleClick }
        >{ language[name] }</button>
    )
}

export default Button;