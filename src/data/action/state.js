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
        gameId: data.id,
        p1Name: data.player_1.name,
        p2Name: data.player_2.name,
        winningScore: data.winning_score,
        alternateEvery: data.change_serve,
    }
}