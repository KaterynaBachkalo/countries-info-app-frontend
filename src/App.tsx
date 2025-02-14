import { Navigate, Route, Routes } from 'react-router-dom';
import './scss/index.scss';

import { SharedLayout } from './components/SharedLayout';
import { lazy } from 'react';

const CountryPage = lazy(() => import('./pages/CountryPage'));
const InfoPage = lazy(() => import('./pages/InfoPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<CountryPage />} />
          <Route path="country-info-page/:countryCode" element={<InfoPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
