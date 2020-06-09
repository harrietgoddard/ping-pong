import initial from './initial';

const serveInterval = 5;
const winningScore = 21;

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

//switch server every 5 points (or every other point if score is 20-20)

const server = state => {
  let total = state.player1 + state.player2;
  let finalPoint = winningScore - 1;

  if ((state.player1 === finalPoint && state.player2 === finalPoint) || total % serveInterval === 0) {
    return {
      ...state,
      player1Serves: !state.player1Serves
    }
  } else {
    return state;
  }
}

//calculate the winner

const won = state => {
  if (state.player1 === winningScore) {
    return {
      ...state,
      winner: 1
    }
  } else if (state.player2 === winningScore) {
    return {
      ...state,
      winner: 2
    }
  } else {
    return state;
  }
}

//add result to results table

const addResult = state => {
  if (state.winner) {
    return {
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
  } else {
    return state;
  }
}

//toggle app language

const changeLanguage = state => {
  return {
    ...state,
    english: !state.english,
  }
}


const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT_PLAYER_1": return addResult(won(server(player1Scores(state))));
    case "INCREMENT_PLAYER_2": return addResult(won(server(player2Scores(state))));
    case "RESET": return { ...initial, results: state.results, english: state.english };
    case "CHANGE_LANGUAGE": return changeLanguage(state);
    default: return state;
  }
}

export default reducer;