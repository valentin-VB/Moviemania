import { FidgetSpinner } from 'react-loader-spinner';
import { Box } from 'components/Reusable Components/Box';
import { Text } from 'components/Reviews/Reviews.styled';

const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text>Loading . . .</Text>
      <FidgetSpinner backgroundColor="green" />
    </Box>
  );
};

export default Loader;
