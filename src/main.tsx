import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/config';
import './theme/themes.css';
import './index.css';
import { ThemeProvider } from './theme/ThemeContext';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);