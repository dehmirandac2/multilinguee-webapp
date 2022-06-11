import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import client from '@libraries/Apollo';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import Routes from './Routes';
import theme from './theme';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
