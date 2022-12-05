import MoviesList from 'components/MoviesList';
import { Box } from 'components/Reusable Components/Box';

function FoundMovies({ movies, query, config }) {
  if (movies.length === 0 && query !== '') {
    return (
      <Box p="16px" color="white">
        Sorry, no movie found for this search query :(
      </Box>
    );
  }
  return <MoviesList movies={movies} config={config}></MoviesList>;
}

export default FoundMovies;
