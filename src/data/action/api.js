import { saveSettings, score, showResults, removeGame } from './state';
import axios from '../axios';

export const postGame = ({ p1Name, p2Name, winningScore, alternateEvery }) => {
    return (dispatch) => {
        axios.post("/", {
            player_1: p1Name,
            player_2: p2Name,
            winning_score: winningScore,
            change_serve: alternateEvery,
        }).then(({ data }) => {
            dispatch(saveSettings(data.data));
        });
    };
};

export const patchScore = player => {
    return (dispatch, getState) => {
        
        let id = getState().gameId;

        axios.patch(`${ id }/score`, {
            player: player
        }).then(({ data }) => {
            dispatch(score(data.data))
        });
    };
};

export const getResults = () => {
    return (dispatch) => {
        axios.get("/").then(({ data }) => {
            dispatch(showResults(data.data))
        });
    };
};

export const deleteGame = (id) => {
    return (dispatch) => {
        axios.delete(`/${ id }`).then(() => {
            dispatch(removeGame(id));
        });
    };
};