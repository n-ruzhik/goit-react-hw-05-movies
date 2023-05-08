import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesItem = lazy(() => import('pages/MoviesItem'));
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
