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
  IMDbLink,
} from './MovieDetails.styled';
import { toHoursAndMinutes } from 'Services/timeFormater';
import Crew from 'components/Crew';
import Trailer from 'components/Trailer';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsBookmarkFill } from 'react-icons/bs';
import { LocalStorageManager } from 'Services/localStorage';

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
      <Trailer videos={videos.results} title={title}></Trailer>
      <Box display="flex" justifyContent="space-between">
        <Box
          display="inline-grid"
          gridGap="6px"
          gridTemplateColumns="auto auto auto auto"
          width="max-content"
        >
          <Text>{title} •</Text>
          <Text>{release_date.slice(0, 4)} •</Text>
          <Text>{toHoursAndMinutes(runtime)} •</Text>
          <IMDbLink href={`https://www.imdb.com/title/${imdb_id}/`}>
            IMDb
          </IMDbLink>
        </Box>
        <Button
          className={isActive}
          onClick={() => {
            localStorageManager.toogleMovies(id);
            setIsActive(localStorageManager.isAddedToWatchList(id));
          }}
        >
          {isActive ? 'Remove from WatchList' : 'Add Watchlist'}
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
