import { Box } from 'components/Reusable Components/Box';
import { toHoursAndMinutes } from 'Services/timeFormater';
import { IMDbLink, Text } from './MovieInfo,styled';

function MovieInfo({ title, release_date, runtime, imdb_id }) {
  return (
    <Box
      display="inline-grid"
      gridGap="6px"
      gridTemplateColumns="auto auto auto auto"
      alignItems="center"
    >
      <Text>
        {title} <span>&nbsp;•</span>
      </Text>
      <Text>
        {release_date.slice(0, 4)} <span>&nbsp;•</span>
      </Text>
      <Text>
        {toHoursAndMinutes(runtime)} <span>&nbsp;•</span>
      </Text>
      <IMDbLink href={`https://www.imdb.com/title/${imdb_id}/`}>IMDb</IMDbLink>
    </Box>
  );
}

export default MovieInfo;
