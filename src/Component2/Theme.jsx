import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const myTheme = createTheme({
  palette: {
    primary: blue,
    text: {
      // primary: "rgba(255, 255, 255, 0.8)",
      fontFamily: "Raleway",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
  shape: {
    borderRadius: "0px",
  },
  // shadow: [0],
});
