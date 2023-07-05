import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
const Home = React.lazy(() => import('pages/Home/Home'));
const Movies = React.lazy(() => import('pages/Movies/Movies'));
const MoviePage = React.lazy(() => import('pages/MoviePage/MoviePage'));
const Cast = React.lazy(() => import('pages/Cast/Cast'));
const Reviews = React.lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>Page is not found....</h1>} />
        </Route>
      </Routes>
    </Suspense>
  </>
  );
};
