import { changeLanguage, saveSettings } from './settingsReducers';
import { score, resetGame, showResults, removeGame } from './gameReducers';


const reducer = (state, action) => {
  switch(action.type) {
    
    case "SCORE": return score(state, action);

    case "RESET": return resetGame(state);

    case "CHANGE_LANGUAGE": return changeLanguage(state);

    case "SAVE_SETTINGS": return saveSettings(state, action);

    case "GET_RESULTS" : return showResults(state, action);

    case "REMOVE_GAME" : return removeGame(state, action);

    default: return state;

  }
}

export default reducer;