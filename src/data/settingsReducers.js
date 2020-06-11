//toggle app language

export const changeLanguage = state => {
  return {
    ...state,
    english: !state.english,
  };
};

export const saveSettings = (state, { gameId, p1Name, p2Name, winningScore, alternateEvery }) => {
  return {
    ...state,
    gameStarted: true,
    gameId,
    p1Name,
    p2Name,
    winningScore,
    alternateEvery,

  };
};