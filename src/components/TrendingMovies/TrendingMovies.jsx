import useMovies from 'Hooks/useMovies';
import MovieCard from 'components/MovieCard';
import { useState, useRef, useCallback } from 'react';
import Loader from 'components/Reusable Components/Loader';
import { fetchTrendingMovies } from 'Services/api';
import { List } from 'components/MovieCard/MovieCard.styled';
import BackToTopLink from 'components/Reusable Components/BackToTopLink';
import { Box } from 'components/Reusable Components/Box';

const TrendingMovies = () => {
  const [page, setPage] = useState(1);
  const { isLoading, results, hasNextPage, error, config } = useMovies(
    page,
    fetchTrendingMovies
  );

  const intObserver = useRef();
  const firstElRef = useRef();

  const lastMovieRef = useCallback(
    movie => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(movies => {
        if (movies[0].isIntersecting && hasNextPage) {
          setPage(prev => prev + 1);
        }
      });

      if (movie) intObserver.current.observe(movie);
    },

    [isLoading, hasNextPage]
  );

  const content = results.map((movie, i) => {
    if (results.length === i + 1) {
      return (
        <MovieCard
          ref={lastMovieRef}
          key={movie.id}
          movie={movie}
          config={config}
        ></MovieCard>
      );
    }

    if (i === 1) {
      return (
        <MovieCard
          ref={firstElRef}
          key={movie.id}
          movie={movie}
          config={config}
        ></MovieCard>
      );
    }
    return <MovieCard key={movie.id} movie={movie} config={config}></MovieCard>;
  });

  return (
    <>
      {error && (
        <Box p="16px" color="white">
          Whoops, something went wrong: {error.message}
        </Box>
      )}
      {results.length > 0 && (
        <>
          <List>{content}</List>
          <BackToTopLink firstElRef={firstElRef}></BackToTopLink>
        </>
      )}

      {isLoading && <Loader></Loader>}
    </>
  );
};

export default TrendingMovies;
