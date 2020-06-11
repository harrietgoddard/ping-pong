//add points when players score

export const score = (state, { player1, player2, serving, winner }) => {
    return {
      ...state,
      player1,
      player2,
      serving,
      winner,
    };
};
  
//switch server every X points (or every other point if score is deuce)

export const server = state => {

    let total = state.player1 + state.player2;

    let interval = total % state.alternateEvery === 0;

    let finalPoint = state.winningScore - 1;

    let deuce = state.player1 === finalPoint && state.player2 === finalPoint;

    let changeServer = deuce || interval;

    return !changeServer ? state : { ...state, serving: !state.serving};

};

//calculate the winner

export const won = state => {

    let scoreGap = Math.abs(state.player1 - state.player2) > 1;

    let player1Wins = state.player1 === state.winningScore;

    let player2Wins = state.player2 === state.winningScore;

    let winner = player1Wins ? 1 : player2Wins ? 2 : state.winner;

    return !winner || !scoreGap ? state : { ...state, winner};

};

//add result to results table

export const addResult = state => {

    return !state.winner ? state :
        {
        ...state,
        results: [
            ...state.results,
            {
            player_1: {
                score: state.player1,
                won: state.winner === 1
            },
            player_2: {
                score: state.player2,
                won: state.winner === 2
            }
            }
        ],
    };
};

//reset

export const resetGame = state => {
    return {
        ...state, 
        gameStarted: false,
        gameId: 0,
        player1: 0,
        player2: 0,
        serving: true,
        winner: 0,
    };
};