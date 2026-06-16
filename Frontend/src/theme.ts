import { createTheme } from "@mui/material/styles";

// Trauben-/Wein-Farbpalette
const theme = createTheme({
  palette: {
    primary: {
      main: "#6A1B9A", // Traube
      light: "#9C4DCC",
      dark: "#4A148C", // dunkle Traube / Wein
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#AD1457", // Beerenton für Akzente/Badges
      contrastText: "#ffffff",
    },
  },
});

export default theme;
