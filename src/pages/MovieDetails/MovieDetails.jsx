import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchConfig, fetchMovieDetails } from 'Services/api';
import { useState, useEffect } from 'react';
import { Box } from 'components/Reusable Components/Box';
import Loader from 'components/Reusable Components/Loader';
import {
  Text,
  Geners,
  Heading,
  StyledLink,
  BackLink,
  Button,
} from './MovieDetails.styled';
import Crew from 'components/Crew';
import Trailer from 'components/Trailer';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsBookmarkFill } from 'react-icons/bs';
import { LocalStorageManager } from 'Services/localStorage';
import MovieInfo from 'components/MovieInfo';

const localStorageManager = new LocalStorageManager();

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home/trending';

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
        setIsActive(localStorageManager.isAddedToWatchList(movieDetails.id));
      } catch (error) {
        console.warn(error);
        setMovieDetails('error');
      }

      try {
        const config = await fetchConfig();
        setConfig(config);
      } catch (error) {
        console.warn(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails || !config) {
    return null;
  }

  if (movieDetails === 'error') {
    return (
      <Box pl="16px">
        <BackLink to={backLinkHref}>
          <MdArrowBackIosNew></MdArrowBackIosNew>
          Back to Movies
        </BackLink>
        <Text>
          Ooops... The page you are looking for might have been removed or
          temporarily unavailable
        </Text>
      </Box>
    );
  }

  const {
    title,
    overview,
    genres,
    videos,
    release_date,
    runtime,
    imdb_id,
    credits,
    id,
  } = movieDetails;

  return (
    <>
      {isLoading && <Loader></Loader>}
      <BackLink to={backLinkHref}>
        <MdArrowBackIosNew></MdArrowBackIosNew>
        Back to Movies
      </BackLink>
      <Heading>{title}</Heading>
      <Trailer videos={videos.results} title={title}></Trailer>
      <Box
        display="flex"
        justifyContent="space-between"
        alingItems="center"
        mb="16px"
      >
        <MovieInfo
          release_date={release_date}
          runtime={runtime}
          imdb_id={imdb_id}
        ></MovieInfo>

        <Button
          className={isActive ? 'active' : null}
          onClick={() => {
            const isActive = localStorageManager.toogleMovies(id);
            setIsActive(isActive);
          }}
        >
          {isActive ? 'Remove from WatchList' : 'Add to Watchlist'}
          <BsBookmarkFill />
        </Button>
      </Box>
      <Geners>
        {genres.map(genr => (
          <span key={genr.id}>{genr.name}</span>
        ))}
      </Geners>
      <Heading>Overview</Heading>
      <Text>{overview}</Text>
      <Crew credits={credits}></Crew>
      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
      <Outlet context={[movieDetails, config]} />
    </>
  );
}

export default MovieDetails;
