import { changeLanguage, saveSettings } from './settingsReducers';
import { player1Scores, player2Scores, server, won, addResult, resetGame } from './gameReducers';


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