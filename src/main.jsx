import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';

import { ThemeProvider } from 'styled-components';
import  GlobalStyles from './styles/global';

import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <SignIn/>
    </ThemeProvider>
  </StrictMode>,
)

