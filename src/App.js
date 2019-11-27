import React from 'react';
import injectSheet from "react-jss";
import { style } from "./styles/globalResetStyles";
import ScoreBoard from './components/TennisGame';

const App = () => {
  return(
    <>
      <ScoreBoard />
    </>
  )
}

export default injectSheet(style)(App);
