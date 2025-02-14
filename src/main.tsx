import { createRoot } from 'react-dom/client';
// import "./index.css";
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <BrowserRouter basename="/countries-info-app-frontend">
        <App />
      </BrowserRouter>
    </Provider>
  </>,
);
