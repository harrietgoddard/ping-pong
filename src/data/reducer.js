import { changeLanguage, saveSettings } from './settingsReducers';
import { player1Scores, player2Scores, addResult, resetGame } from './gameReducers';


const reducer = (state, action) => {
  switch(action.type) {
    
    case "INCREMENT_PLAYER_1": return addResult(player1Scores(state, action));

    case "INCREMENT_PLAYER_2": return addResult(player2Scores(state, action));

    case "RESET": return resetGame(state);

    case "CHANGE_LANGUAGE": return changeLanguage(state);

    case "SAVE_SETTINGS": return saveSettings(state, action);

    default: return state;

  }
}

export default reducer;