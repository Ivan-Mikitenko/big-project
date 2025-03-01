import { render } from 'react-dom';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { App } from '@/app/App';

import '@/shared/config/i18n/i18n-config';
import { ErrorBoundary } from '@/app/providers/error-boundary';

render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    ,
  </ErrorBoundary>,
  document.getElementById('root'),
);
