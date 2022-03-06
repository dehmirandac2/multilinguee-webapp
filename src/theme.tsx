import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#272941",
    },
    secondary: {
      main: "#F0B400",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#FFFFFF",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
        },
      },
    },
  },
});
