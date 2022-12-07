import { Box } from 'components/Reusable Components/Box';
import { MoviesCategories } from './Home.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MoviesSearch from 'pages/MoviesSearch/MoviesSearch';

function Home() {
  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <MoviesCategories to="trending">Trending</MoviesCategories>
        <MoviesCategories to="upcoming">Upcoming</MoviesCategories>
        <MoviesCategories to="top_rated">Top Rated</MoviesCategories>
      </Box>
      <MoviesSearch></MoviesSearch>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
}

export default Home;
