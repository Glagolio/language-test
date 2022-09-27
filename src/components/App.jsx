import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/Home';
import AddWordsPage from 'pages/Add';
import RepetitorPage from 'pages/Repetitor';
import ResultsPage from 'pages/Results';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename="/language-test">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddWordsPage />} />
          <Route path="test" element={<RepetitorPage />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
