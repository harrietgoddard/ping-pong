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

export const incrementPlayer1 = (data) => {
    let serving = data.player_1.serving ? true : false;
    let winner = data.player_1.won ? 1 : data.player_2.won ? 2 : 0;
    return {
        type: "INCREMENT_PLAYER_1",
        serving: serving,
        winner: winner,
    };
};

export const incrementPlayer2 = (data) => {
    let serving = data.player_1.serving ? true : false;
    let winner = data.player_1.won ? 1 : data.player_2.won ? 2 : 0;
    return {
        type: "INCREMENT_PLAYER_2",
        serving: serving,
        winner: winner,
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