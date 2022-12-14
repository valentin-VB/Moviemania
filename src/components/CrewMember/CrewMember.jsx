import { Box } from 'components/Reusable Components/Box';
import { Wraper } from './CrewMember.styled';

function CrewMember({ crew, position, positionName }) {
  const findCrewMember = () => {
    const crewMember = crew.find(
      crewMember => crewMember.known_for_department === position
    );

    if (!crewMember?.name) {
      return 'Unknown author';
    }

    return crewMember?.name;
  };

  return (
    <Wraper>
      <Box as="h3" color="white">
        {positionName}:
      </Box>
      <Box as="span" fontWeight="400" display="block" color="#3DD2CC">
        {findCrewMember()}
      </Box>
    </Wraper>
  );
}

export default CrewMember;
