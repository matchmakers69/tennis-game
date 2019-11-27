import React from "react";
import withStyles from "react-jss";
import { Typography, Box } from "@material-ui/core";
import { style } from '../../styles/globalResetStyles';
import cx from 'classnames';
import styles from "./style";

const ResetMatch = props => {
  const { classes, handleResetBoard } = props;
  return (
    <div className={classes.resetContainer}>
      <header className={classes.resetHeader}>
        <Box m={3}>
          <Typography
            variant="h3"
            style={{
              marginBottom: 0,
              paddingBottom: 0,
              textTransform: "uppercase",
              textAlign: "center"
            }}
          >
            Game over!
          </Typography>
        </Box>
      </header>
      <button className={cx(style.button, classes.resetButton)} onClick={() => handleResetBoard()} type="button">
        start new game
      </button>
    </div>
  );
};

export default withStyles(styles)(ResetMatch);
