import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/ThemeProvider.tsx';
import { createContext } from 'react';
import { IThemeContext } from './types.ts';

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <BrowserRouter basename="/countries-info-app-frontend">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </>,
);
