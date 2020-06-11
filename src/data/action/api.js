import { saveSettings, incrementPlayer1, incrementPlayer2 } from './state';
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

export const patchScore1 = () => {
    return (dispatch, getState) => {
        
        let id = getState().gameId;

        axios.patch(`${ id }/score`, {
            player: 1
        }).then(({ data }) => {
            dispatch(incrementPlayer1(data.data))
        });
    };
};

export const patchScore2 = () => {
    return (dispatch, getState) => {
        
        let id = getState().gameId;

        axios.patch(`${ id }/score`, {
            player: 2
        }).then(({ data }) => {
            dispatch(incrementPlayer2(data.data))
        });
    };
};