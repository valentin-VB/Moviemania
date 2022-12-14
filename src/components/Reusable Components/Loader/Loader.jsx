import { Oval } from 'react-loader-spinner';
import { Box } from 'components/Reusable Components/Box';

const Loader = () => {
  return (
    <Box pt="32px" display="flex" justifyContent="center">
      <Oval
        color="#3DD2CC"
        secondaryColor="#rgba(61, 210, 204, 0.4)"
        width={150}
        height={150}
      />
    </Box>
  );
};

export default Loader;
