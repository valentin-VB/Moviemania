import { NavLink, useLocation } from 'react-router-dom';
import { Wraper, ListItem, MovieInfo, List } from './MoviesList.styled';

function MoviesList({ movies, config }) {
  const location = useLocation();
  console.log('location', location);
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
                <MovieInfo style={{ position: 'absolute', zIndex: 1000 }}>
                  <p>{movie.title}</p>
                </MovieInfo>
              </Wraper>
            </NavLink>
          </ListItem>
        ))}
    </List>
  );
}

export default MoviesList;
