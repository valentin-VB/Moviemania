import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Layout from 'components/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const MoviesSearch = lazy(() => import('../pages/MoviesSearch/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const TrendingMovies = lazy(() => import('../components/TrendingMovies'));
const UpcomingMovies = lazy(() => import('../components/UpcomingMovies'));
const TopRatedMovies = lazy(() => import('../components/TopRatedMovies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home"></Navigate>} />
        <Route path="home" element={<Home />}>
          <Route index element={<Navigate to="trending" />}></Route>
          <Route path="trending" element={<TrendingMovies />}></Route>
          <Route path="upcoming" element={<UpcomingMovies />}></Route>
          <Route path="top_rated" element={<TopRatedMovies />}></Route>
        </Route>
        <Route path="movies" element={<MoviesSearch />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
