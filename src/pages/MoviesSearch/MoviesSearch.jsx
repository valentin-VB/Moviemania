import Searchbar from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery, fetchConfig } from 'Services/api';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Reusable Components/Loader';
import FoundMovies from 'components/FoundMovies/FoundMovies';

function MoviesSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams);
  const searchQuery = searchParams.get('query') ?? '';
  console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchMovieByQuery(searchQuery);
        const config = await fetchConfig();
        setConfig(config);
        setMovies(result);
        setLoading(false);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query });
    setMovies([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      {loading ? (
        <Loader></Loader>
      ) : (
        searchQuery !== '' && (
          <FoundMovies
            query={searchQuery}
            movies={movies}
            config={config}
          ></FoundMovies>
        )
      )}
    </>
  );
}

export default MoviesSearch;
