import MovieCard from 'components/MovieCard';

function ListContent({ results, config, lastMovieRef, elRef }) {
  return results.map((movie, i) => {
    if (results.length === i + 1 && lastMovieRef) {
      return (
        <MovieCard
          ref={lastMovieRef}
          key={movie.id}
          movie={movie}
          config={config}
        ></MovieCard>
      );
    }

    if (i === 0 && elRef) {
      return (
        <MovieCard
          ref={elRef}
          key={movie.id}
          movie={movie}
          config={config}
        ></MovieCard>
      );
    }

    return <MovieCard key={movie.id} movie={movie} config={config}></MovieCard>;
  });
}

export default ListContent;
