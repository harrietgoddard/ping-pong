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

export const saveSettings = (data) => {
    return {
        type: "SAVE_SETTINGS",
        p1Name: data.p1Name,
        p2Name: data.p2Name,
        winningScore: +data.winningScore,
        alternateEvery: +data.alternateEvery,
    };
};