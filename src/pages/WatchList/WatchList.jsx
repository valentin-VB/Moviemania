import ListContent from 'components/ListContent';
import { List } from 'components/MovieCard/MovieCard.styled';
import { Box } from 'components/Reusable Components/Box';
import Loader from 'components/Reusable Components/Loader';
import { useState, useEffect } from 'react';
import { fetchMovieDetails, fetchConfig } from 'Services/api';
import { LocalStorageManager } from 'Services/localStorage';

const localStorageManager = new LocalStorageManager();

export function WatchList() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const savedIds = localStorageManager.getMovies();
    const fetchData = async () => {
      const result = [];
      savedIds.map(async id => {
        try {
          const movieInfo = await fetchMovieDetails(id);
          result.push(movieInfo);
        } catch (error) {
          console.warn(error);
          setError(error);
        }
      });

      try {
        const config = await fetchConfig();
        setConfig(config);
      } catch (error) {
        console.warn(error);
        setError(error);
      }
      setMovies(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader></Loader>}
      {movies.length > 0 && (
        <List>
          <ListContent results={movies} config={config} />
        </List>
      )}
      {isLoading !== null && isLoading !== true && movies.length === 0 && (
        <Box p="16px" color="white">
          No movies have been added to the watchlist yet
        </Box>
      )}
    </>
  );
}
