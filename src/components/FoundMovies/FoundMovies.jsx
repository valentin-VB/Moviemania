import MoviesList from 'components/MoviesList';

function FoundMovies({ movies, query, config }) {
  if (movies.length === 0 && query !== '') {
    return <p>Sorry, no movie found for this search query</p>;
  }
  return <MoviesList movies={movies} config={config}></MoviesList>;
}

export default FoundMovies;
