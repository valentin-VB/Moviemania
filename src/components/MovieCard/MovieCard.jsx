import { NavLink, useLocation } from 'react-router-dom';
import { ListItem, MovieInfo, Wraper } from './MovieCard.styled';
import { BsFillStarFill } from 'react-icons/bs';
import React from 'react';

const MovieCard = React.forwardRef(({ movie, config }, ref) => {
  const location = useLocation();
  const cardBody = (
    <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
      <Wraper>
        {movie.poster_path && (
          <img
            alt={movie.title}
            src={`${config.base_url}${config.poster_sizes[3]}${movie.poster_path}`}
          />
        )}

        <MovieInfo>
          <BsFillStarFill></BsFillStarFill>
          <p>{movie.vote_average.toFixed(1)}</p>
        </MovieInfo>
      </Wraper>
    </NavLink>
  );

  const content = ref ? (
    <ListItem ref={ref}>{cardBody}</ListItem>
  ) : (
    <ListItem>{cardBody}</ListItem>
  );

  return content;
});

export default MovieCard;
