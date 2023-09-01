import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from '@contexts/LanguageContext';
import { AppThemeProvider } from '@contexts/ThemeContext';

import App from '@pages/App';

import './index.css';

const container = document.getElementById('root');

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
