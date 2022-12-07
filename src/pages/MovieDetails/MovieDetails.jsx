import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchConfig, fetchMovieDetails } from 'Services/api';
import { useState, useEffect } from 'react';
import { Box } from 'components/Reusable Components/Box';
import Loader from 'components/Reusable Components/Loader';
import {
  BackIcon,
  Text,
  Wrapper,
  Geners,
  Heading,
  StyledLink,
  BackLink,
  ListItem,
} from './MovieDetails.styled';
import { toHoursAndMinutes } from 'Services/timeFormater';
import Crew from 'components/Crew';
import Trailer from 'components/Trailer';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  console.log('movieDetails', movieDetails);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home/trending';

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
        setLoading(false);
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
          <BackIcon></BackIcon>
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
  } = movieDetails;

  return (
    <>
      {loading && <Loader></Loader>}
      <BackLink to={backLinkHref}>
        <BackIcon></BackIcon>
        Back to Movies
      </BackLink>
      <Trailer videos={videos.results} title={title}></Trailer>
      <Text>
        {`${title} • ${release_date.slice(0, 4)} • ${toHoursAndMinutes(
          runtime
        )}`}{' '}
        •<a href={`https://www.imdb.com/title/${imdb_id}/`}> IMDb</a>
      </Text>
      <Geners>
        {genres.map(genr => (
          <span key={genr.id}>{genr.name}</span>
        ))}
      </Geners>
      <Heading>Overview</Heading>
      <Text>{overview}</Text>
      <Box as="ul" mb="16px">
        <ListItem>
          <Crew
            crew={credits.crew}
            position="Directing"
            positionName="Director"
          ></Crew>
        </ListItem>
        <ListItem>
          <Crew
            crew={credits.crew}
            position="Writing"
            positionName="Writer"
          ></Crew>
        </ListItem>
        <ListItem>
          <Crew
            crew={credits.crew}
            position="Sound"
            positionName="Music by"
          ></Crew>
        </ListItem>
      </Box>
      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
      <Outlet context={[movieDetails, config]} />
    </>
  );
}

export default MovieDetails;
