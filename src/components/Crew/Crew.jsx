import CrewMember from 'components/CrewMember';
import { Box } from 'components/Reusable Components/Box';
import { ListItem } from 'pages/MovieDetails/MovieDetails.styled';

function Crew({ credits }) {
  return (
    <Box as="ul" mb="16px">
      <ListItem>
        <CrewMember
          crew={credits.crew}
          position="Directing"
          positionName="Director"
        ></CrewMember>
      </ListItem>
      <ListItem>
        <CrewMember
          crew={credits.crew}
          position="Writing"
          positionName="Writer"
        ></CrewMember>
      </ListItem>
      <ListItem>
        <CrewMember
          crew={credits.crew}
          position="Sound"
          positionName="Music by"
        ></CrewMember>
      </ListItem>
    </Box>
  );
}

export default Crew;
