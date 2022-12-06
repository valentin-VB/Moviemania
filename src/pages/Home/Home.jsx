import { Box } from 'components/Reusable Components/Box';
import { MoviesCategories } from './Home.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MoviesSearch from 'pages/MoviesSearch/MoviesSearch';

function Home() {
  return (
    <div>
      <Box display="flex" justifyContent="space-around" pt="20px" pb="20px">
        <MoviesCategories to="trending">Trending</MoviesCategories>
        <MoviesCategories to="upcoming">Upcoming</MoviesCategories>
        <MoviesCategories to="top_rated">Top Rated</MoviesCategories>
      </Box>
      <MoviesSearch></MoviesSearch>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
}

export default Home;
