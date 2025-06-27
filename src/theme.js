import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#09A66D",
    },
    info: { main: '#7c7c7c', dark: '#212121' },
  },
});

export default theme;
