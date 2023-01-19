import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global'
import theme from './styles/theme';
import { Home } from './pages/Home';
import {Login } from "./pages/Login";
import {Details} from "./pages/Details";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />      
    </ThemeProvider>
  </React.StrictMode>,
)
