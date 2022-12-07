import { Box } from 'components/Reusable Components/Box';
import { Wraper } from './Crew.styled';

function Crew({ crew, position, positionName }) {
  const findDirector = () => {
    const crewMember = crew.find(
      crewMember => crewMember.known_for_department === position
    );

    return crewMember.name;
  };

  return (
    <Wraper>
      <Box as="h3" color="white">
        {positionName}:
      </Box>
      <Box as="span" fontWeight="400" display="block" color="#3DD2CC">
        {findDirector()}
      </Box>
    </Wraper>
  );
}

export default Crew;
