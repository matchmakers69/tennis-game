import "typeface-roboto";
import { colors } from "./globalColorsStyles";


export const style = {
  "@global": {
    html: {
      fontSize: "62.5%"
    },
    body: {
      margin: 0,
      padding: 0,
      fontSize: "1.8rem",
      overflowX: "hidden",
      backgroundColor: colors.$whiteColor,
      fontFamily: "Roboto",
      minHeight: "100vh",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      '& > div':{
          border: '1px solid #ccc',
          backgroundColor: colors.$bodyColor
      }
    },
    button: {
      textShadow: "none",
      boxShadow: "none",
      border: 0,
      cursor: "pointer",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    }
  }
};
