import React from "react";
import Header from './components/Header/';
import Game from "./components/Game/";

const App = ({ gameStarted }) => (
    <>
      <Header />
      <Game />
    </>
);

export default App;
