import { Box } from 'components/Reusable Components/Box';
import { MoviesCategories } from './Home.styled';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <Box display="flex" justifyContent="space-around" pt="20px" pb="20px">
        <MoviesCategories to="trending">Trending</MoviesCategories>
        <MoviesCategories to="upcoming">Upcoming</MoviesCategories>
        <MoviesCategories to="top_rated">Top Rated</MoviesCategories>
      </Box>
      <Outlet></Outlet>
    </>
  );
}

export default Home;
