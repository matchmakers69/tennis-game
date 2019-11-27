import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from 'react-jss';
import CounterButtons from './CounterButtons';
import { typography } from '../../styles/globalTypographyStyles';

const Player = props => {
  const {
    name,
    player,
    winPoints,
    loosePoints,
    playerIndex,
    currentPlayerIndex,
    playerOneScore,
    playerTwoScore,
    classes,
    getMatchScore,
  } = props;

  const points =
    playerIndex === currentPlayerIndex ? playerOneScore : playerTwoScore;

  const disableButtonDecrease = getMatchScore() !== 'Deuce';

  // const getTennisPoints = points => {
  //   const tennisPoints = ['0', '15', '30', '40'];
  //   return tennisPoints[points];
  // };

  return (
    <Grid item xs={12} sm={6}>
      <span 
        className={classes.headerSpan}>Player's name: {name}</span>
     <CounterButtons
        playerId={player}
        points={points}
        winPoints={winPoints}
        loosePoints={loosePoints}
        disableButtonDecrease={disableButtonDecrease}
      />
     
    </Grid>
  );
};

export default withStyles(typography)(Player);
