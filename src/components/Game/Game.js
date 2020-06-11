import React from "react";
import ScoreCard1 from '../ScoreCard/ScoreCard1';
import ScoreCard2 from '../ScoreCard/ScoreCard2';
import Winner from '../Winner/';
import ResetButton from '../Button/ResetButton';
import Results from '../Results/';
import Form from '../Form/';
import Loading from '../Loading/';

const Game = ({ gameStarted }) => (

    !gameStarted ? 
    <Form /> : 
    <>
        <div className="row mb-4">
            <ScoreCard1 />
            <ScoreCard2 />
        </div>

        <Winner />

        <hr />

        <ResetButton
        name={ "reset" }
        />

        <Loading>
            <Results />
        </Loading>
    </>
    
);

export default Game;