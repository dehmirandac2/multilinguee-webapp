import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
