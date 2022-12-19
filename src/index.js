import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { HashRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </ThemeProvider>
  //</React.StrictMode>
);
