import { Box } from 'components/Reusable Components/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { Wraper, ListItem, MovieInfo, List } from './MoviesList.styled';

function MoviesList({ movies, config }) {
  const location = useLocation();
  return (
    <List>
      {movies.length > 0 &&
        movies.map(movie => (
          <ListItem key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Wraper>
                <img
                  alt={movie.title}
                  src={`${config.base_url}${config.poster_sizes[3]}${movie.poster_path}`}
                />
                <MovieInfo>
                  <Box as="p" pl="10px" pr="10px">
                    {movie.title}
                  </Box>
                </MovieInfo>
              </Wraper>
            </NavLink>
          </ListItem>
        ))}
    </List>
  );
}

export default MoviesList;
