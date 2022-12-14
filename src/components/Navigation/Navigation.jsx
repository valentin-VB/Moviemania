import { Box } from 'components/Reusable Components/Box';
import { GrHomeRounded } from 'react-icons/gr';
import { IoFilmOutline } from 'react-icons/io5';
import { BsBookmarkFill } from 'react-icons/bs';

import { StyledNavLink } from './Navigation.styled';

function Navigation({ closeMenu }) {
  return (
    <nav>
      <StyledNavLink
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
        to="/home"
      >
        <Box as="span" pl="16px">
          Home
        </Box>
        <GrHomeRounded />
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
        to="/movies"
      >
        <Box as="span" pl="16px">
          Movies
        </Box>

        <IoFilmOutline />
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
        to="/watchlist"
      >
        <Box as="span" pl="16px">
          Watchlist
        </Box>

        <BsBookmarkFill />
      </StyledNavLink>
    </nav>
  );
}

export default Navigation;
