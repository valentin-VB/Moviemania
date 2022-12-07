import { Box } from 'components/Reusable Components/Box';
import { HomeIcon, FilmIcon } from './Navigation.styled';
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
        <HomeIcon className="icon"></HomeIcon>
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

        <FilmIcon></FilmIcon>
      </StyledNavLink>
    </nav>
  );
}

export default Navigation;
