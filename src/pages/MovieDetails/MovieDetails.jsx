import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchConfig, fetchMovieDetails } from 'Services/api';
import { useState, useEffect } from 'react';
import { Box } from 'components/Reusable Components/Box';
import Loader from 'components/Reusable Components/Loader';
import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';
import {
  BackIcon,
  Text,
  Wrapper,
  Geners,
  Heading,
  StyledLink,
} from './MovieDetails.styled';
import { toHoursAndMinutes } from 'Services/timeFormater';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  console.log('movieDetails', movieDetails);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/trending';

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
        setLoading(false);
      } catch (error) {
        console.warn(error);
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

  if (movieDetails === null || config === null) {
    return;
  }

  const { title, overview, genres, videos, release_date, runtime, imdb_id } =
    movieDetails;

  const findTrailer = () => {
    const trailer = videos.results.find(video =>
      video.name.toLowerCase().includes('trailer')
    );

    const URL = `http://www.youtube.com/embed/${trailer?.key}`;

    console.log('URL', URL);
    return URL;
  };

  return (
    <Box pl="16px" pr="16px">
      {loading && <Loader></Loader>}
      <StyledNavLink to={backLinkHref}>
        <BackIcon></BackIcon>
        Back to Movies
      </StyledNavLink>
      <Box>
        <Wrapper>
          <iframe
            title={title}
            id="ytplayer"
            src={findTrailer()}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
          ></iframe>
        </Wrapper>
        <Text>
          {`${title} • ${release_date.slice(0, 4)} • ${toHoursAndMinutes(
            runtime
          )}`}{' '}
          •<a href={`https://www.imdb.com/title/${imdb_id}/`}> IMDb</a>
        </Text>
        <Geners>
          {genres.map(genr => (
            <span>{genr.name}</span>
          ))}
        </Geners>
        <Heading>Overview</Heading>
        <Text>{overview}</Text>
      </Box>
      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
      <Outlet context={[movieDetails, config]} />
    </Box>
  );
}

export default MovieDetails;
