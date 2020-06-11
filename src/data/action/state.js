export const reset = () => {
    return {
        type: "RESET"
    };
};

export const changeLanguage = () => {
    return {
        type: "CHANGE_LANGUAGE"
    };
};

export const incrementPlayer1 = () => {
    return {
        type: "INCREMENT_PLAYER_1"
    };
};

export const incrementPlayer2 = () => {
    return {
        type: "INCREMENT_PLAYER_2"
    };
};

export const saveSettings = ({ p1Name, p2Name, winningScore, alternateEvery }) => {
    return {
        type: "SAVE_SETTINGS",
        p1Name,
        p2Name,
        winningScore: +winningScore,
        alternateEvery: +alternateEvery,
    };
};