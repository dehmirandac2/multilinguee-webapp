import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import theme from './theme';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
