import React from "react";
import withStyles from "react-jss";
import styles from "./style";

const CounterButtons = props => {
  const {
    playerId,
    winPoints,
    loosePoints,
    disableButtonDecrease,
    classes
  } = props;

  return (
    <div className={classes.buttonsContainer}>
      <button
        className={classes.tennisButton}
        type="button"
        onClick={() => winPoints(playerId.name)}
      >
        <span>+</span>
      </button>

      <button
        className={classes.tennisButton}
        disabled={disableButtonDecrease}
        type="button"
        onClick={() => loosePoints(playerId.name)}
      >
        <span>-</span>
      </button>
    </div>
  );
};

export default withStyles(styles)(CounterButtons);
