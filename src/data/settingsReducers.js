//toggle app language

export const changeLanguage = state => {
    return {
      ...state,
      english: !state.english,
    };
  };
  
  //save settings
  
  export const saveSettings = (state, { p1Name, p2Name, winningScore, alternateEvery }) => {
    return {
      ...state,
      p1Name,
      p2Name,
      winningScore,
      alternateEvery,
    };
  };