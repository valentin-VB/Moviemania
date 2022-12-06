import { Box } from 'components/Reusable Components/Box';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { useOutletContext } from 'react-router-dom';
import { List, ListItem, Text } from './Cast.styled';
function Cast() {
  const [movieDetails, config] = useOutletContext();
  const cast = movieDetails.credits.cast;
  console.log('cast', cast);
  return (
    <List>
      {cast.map(actor => {
        if (!actor.profile_path) {
          return IoNavigateCircleOutline;
        }
        return (
          <ListItem key={actor.id}>
            <img
              ml="auto"
              mr="auto"
              src={`${config.base_url}${config.profile_sizes[1]}${actor.profile_path}`}
              alt=""
            />
            <Box p="6px">
              <Text>{actor.name}</Text>
              <Text>
                <b>Character: </b>
                {actor.character}
              </Text>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Cast;
