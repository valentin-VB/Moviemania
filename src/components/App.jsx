import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Loader from './Reusable Components/Loader';
import Reviews from './Reviews';
import Header from './Header';
import TrendingMovies from './TrendingMovies';
import UpcomingMovies from './UpcomingMovies';
import TopRatedMovies from './TopRatedMovies';

const Home = lazy(() => import('../pages/Home/Home'));
const MoviesSearch = lazy(() => import('../pages/MoviesSearch/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Suspense fallback={<Loader></Loader>}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                index
                element={<Navigate to="/trending"></Navigate>}
              ></Route>
              <Route
                path="trending"
                element={<TrendingMovies></TrendingMovies>}
              ></Route>
              <Route
                path="upcoming"
                element={<UpcomingMovies></UpcomingMovies>}
              ></Route>
              <Route
                path="top_rated"
                element={<TopRatedMovies></TopRatedMovies>}
              ></Route>
            </Route>
            <Route path="/movies" element={<MoviesSearch />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
