import { colors } from "../../styles/globalColorsStyles";

const styles = {
  buttonsContainer: {
    display: "flex",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 100,
    marginLeft: "auto",
    marginRight: "auto"
  },
  tennisButton: {
    width: 40,
    height: 40,
    borderRadius: "100%",
    backgroundColor: colors.$greenColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
    outline: "none",
    "&:disabled": {
      opacity: 0.5,
      pointerEvents: "none"
    },
    "& span": {
      display: "block",
      color: colors.$whiteColor,
      fontSize: "2rem"
    }
  },
  resetContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"
  },
  resetButton: {
    height: 50,
    maxWidth: 200,
    minWidth: 200,
    fontSize: "1.4rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.$whiteColor,
    backgroundColor: colors.$darkGrey,
  }
};

export default styles;
