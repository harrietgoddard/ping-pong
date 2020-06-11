import { changeLanguage, saveSettings } from './settingsReducers';
import { score, addResult, resetGame } from './gameReducers';


const reducer = (state, action) => {
  switch(action.type) {
    
    case "SCORE": return addResult(score(state, action));

    case "RESET": return resetGame(state);

    case "CHANGE_LANGUAGE": return changeLanguage(state);

    case "SAVE_SETTINGS": return saveSettings(state, action);

    default: return state;

  }
}

export default reducer;