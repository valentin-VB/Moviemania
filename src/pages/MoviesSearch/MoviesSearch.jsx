import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useRef, useCallback } from 'react';
import Searchbar from 'components/Searchbar';
import { fetchMovieByQuery } from 'Services/api';
import Loader from 'components/Reusable Components/Loader';
import useMovies from 'Hooks/useMovies';
import { List } from 'components/MovieCard/MovieCard.styled';
import { Box } from 'components/Reusable Components/Box';
import { useInView } from 'react-intersection-observer';
import BackToTopLink from 'components/Reusable Components/BackToTopLink';
import { intObserverManager } from 'Services/infiniteScroll';
import ListContent from 'components/ListContent';

function MoviesSearch() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const searchQuery = searchParams.get('query') ?? '';

  const { isLoading, results, hasNextPage, error, config } = useMovies(
    page,
    fetchMovieByQuery,
    searchQuery
  );

  const handleFormSubmit = query => {
    navigate({
      pathname: '/movies',
      search: `?query=${query}`,
    });
    setPage(1);
  };

  const addPage = () => {
    setPage(prev => prev + 1);
  };

  const intObserver = useRef();
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

  const { ref, inView } = useInView({
    rootMargin: '200px',
    threshold: 0,
  });

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      {error && (
        <Box p="16px" color="white">
          Whoops, something went wrong: {error.message}
        </Box>
      )}
      {isLoading && <Loader></Loader>}
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
      {results.length === 0 &&
        searchQuery &&
        isLoading !== null &&
        isLoading !== true && (
          <Box p="16px" color="white">
            Sorry, no movie found for this search query :(
          </Box>
        )}
    </>
  );
}

export default MoviesSearch;
