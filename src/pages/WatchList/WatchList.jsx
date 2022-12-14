import MovieCard from 'components/MovieCard';
import { List } from 'components/MovieCard/MovieCard.styled';
import Loader from 'components/Reusable Components/Loader';
import { useState, useEffect } from 'react';
import { fetchMovieDetails, fetchConfig } from 'Services/api';
import { LocalStorageManager } from 'Services/localStorage';

const localStorageManager = new LocalStorageManager();

export function WatchList() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedIds = localStorageManager.getMovies();
    const fetchData = async () => {
      const result = [];
      setIsLoading(true);
      savedIds.map(async id => {
        try {
          const movieInfo = await fetchMovieDetails(id);
          result.push(movieInfo);
        } catch (error) {
          console.warn(error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      });

      try {
        const config = await fetchConfig();
        setConfig(config);
      } catch (error) {
        console.warn(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }

      setMovies(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const content = movies.map(movie => (
    <MovieCard key={movie.id} movie={movie} config={config}></MovieCard>
  ));

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {movies.length > 0 && <List>{content}</List>}
      {isLoading && <Loader></Loader>}
    </>
  );
}
