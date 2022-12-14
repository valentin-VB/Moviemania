import { useState, useEffect } from 'react';
import { fetchConfig } from 'Services/api';

const useMovies = (page = 1, fetchMovies, searchQuery) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const handleSearchbarSubmit = () => {
    setResults([]);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchMovies(page, searchQuery);
        const config = await fetchConfig();
        setConfig(config);
        setResults(prev => [...prev, ...result]);
        setHasNextPage(Boolean(result.length));
        setIsLoading(false);
        setIsFetched(true);
      } catch (error) {
        console.warn(error);
        setError(error);
      } finally {
        setIsLoading(false);
        // setIsFetched(false);
      }
    };

    fetchData();
  }, [fetchMovies, page, searchQuery]);

  return {
    isLoading,
    results,
    hasNextPage,
    error,
    config,
    isFetched,
    handleSearchbarSubmit,
  };
};

export default useMovies;
