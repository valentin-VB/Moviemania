import { fetchConfig, fetchTopRatedMovies } from '../../Services/api';
import { useEffect, useState } from 'react';
import Loader from 'components/Reusable Components/Loader';
import MoviesList from 'components/MoviesList';

function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState(null);
  console.log('movies', movies);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const trendingMovies = await fetchTopRatedMovies();
        const config = await fetchConfig();
        setConfig(config);
        setMovies(trendingMovies);
        setLoading(false);
      } catch (error) {
        console.warn(error);
      }

      // console.log('TrandingMovies', TrandingMovies);
      // console.log('fetchTrendingMovies();', fetchTrendingMovies());
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
export default TopRatedMovies;
