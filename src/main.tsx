import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from '@contexts/LanguageContext';
import { AppThemeProvider } from '@contexts/ThemeContext';

import App from '@pages/App';

const container = document.getElementById('root');
const queryClient = new QueryClient();

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <AppThemeProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AppThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
