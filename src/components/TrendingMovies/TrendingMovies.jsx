import { fetchTrendingMovies, fetchConfig } from '../../Services/api';
import { useEffect, useState } from 'react';
import Loader from 'components/Reusable Components/Loader';
import MoviesList from 'components/MoviesList';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        const config = await fetchConfig();
        setConfig(config);
        setMovies(trendingMovies);
        setLoading(false);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader></Loader>}
      <MoviesList movies={movies} config={config}></MoviesList>
    </>
  );
}
export default TrendingMovies;
