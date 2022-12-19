import useMovies from 'Hooks/useMovies';
import { useState, useRef, useCallback } from 'react';
import Loader from 'components/Reusable Components/Loader';
import { fetchTopRatedMovies } from 'Services/api';
import { List } from 'components/MovieCard/MovieCard.styled';
import BackToTopLink from 'components/Reusable Components/BackToTopLink';
import { Box } from 'components/Reusable Components/Box';
import { intObserverManager } from 'Services/infiniteScroll';
import ListContent from 'components/ListContent';
import { useInView } from 'react-intersection-observer';

const TopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const { isLoading, results, hasNextPage, error, config } = useMovies(
    page,
    fetchTopRatedMovies
  );

  const { ref, inView } = useInView({
    rootMargin: '200px',
    threshold: 0,
  });

  const intObserver = useRef();
  const addPage = () => {
    setPage(prev => prev + 1);
  };
  const lastMovieRef = useCallback(
    movieCard => {
      const params = {
        movieCard,
        hasNextPage,
        isLoading,
        addPage,
        intObserver,
      };
      intObserverManager(params);
    },
    [isLoading, hasNextPage]
  );

  return (
    <>
      {error && (
        <Box p="16px" color="white">
          Whoops, something went wrong: {error.message}
        </Box>
      )}
      {results.length > 0 && (
        <>
          <List>
            <ListContent
              results={results}
              config={config}
              lastMovieRef={lastMovieRef}
              elRef={ref}
            />
          </List>
          <BackToTopLink inView={inView}></BackToTopLink>
        </>
      )}

      {isLoading && <Loader></Loader>}
    </>
  );
};

export default TopRatedMovies;
