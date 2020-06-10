import initial from './initial';

//add points when players score

const player1Scores = state => {
  return {
    ...state,
    player1: state.player1 + 1
  }
}
  
const player2Scores = state => {
  return {
    ...state,
    player2: state.player2 + 1
  }
}

//switch server every X points (or every other point if score is deuce)

const server = state => {
  
  let total = state.player1 + state.player2;

  let finalPoint = state.winningScore - 1;

  let changeServer = (state.player1 === finalPoint && state.player2 === finalPoint) || total % state.alternateEvery === 0;

  return !changeServer ? state : { ...state, serving: !state.serving};

}

//calculate the winner

const won = state => {
  
  let scoreGap = Math.abs(state.player1 - state.player2) > 1
  
  let winner = state.player1 === state.winningScore ? 1 :
  state.player2 === state.winningScore ? 2 : state.winner;

  return !winner || !scoreGap ? state : { ...state, winner};

}

//add result to results table

const addResult = state => {
  
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
    }
}

//toggle app language

const changeLanguage = state => {
  return {
    ...state,
    english: !state.english,
  }
}

//save settings

const saveSettings = (state, action) => {
  return {
    ...state,
    p1Name: action.p1Name,
    p2Name: action.p2Name,
    winningScore: action.winningScore,
    alternateEvery: action.alternateEvery,
  }
}

//reset

const resetGame = state => {
  return {
    ...initial, 
    results: state.results, 
    english: state.english,
    p1Name: state.p1Name,
    p2Name: state.p2Name,
    winningScore: state.winningScore,
    alternateEvery: state.alternateEvery,
  }
}


const reducer = (state, action) => {
  switch(action.type) {
    
    case "INCREMENT_PLAYER_1": return addResult(won(server(player1Scores(state))));

    case "INCREMENT_PLAYER_2": return addResult(won(server(player2Scores(state))));

    case "RESET": return resetGame(state);

    case "CHANGE_LANGUAGE": return changeLanguage(state);

    case "SAVE_SETTINGS": return saveSettings(state, action);

    default: return state;

  }
}

export default reducer;