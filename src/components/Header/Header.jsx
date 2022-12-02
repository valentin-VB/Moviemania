import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';
import {
  FilmIcon,
  HeaderMenu,
  HomeIcon,
  Logo,
  MenuIcon,
  PageHeader,
} from './Header.styled';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState();

  return (
    <PageHeader>
      <Logo>Moviemania</Logo>
      {isOpen && (
        <HeaderMenu className="">
          <nav>
            <StyledNavLink onClick={() => setIsOpen(false)} to="/">
              Home
              <HomeIcon className="icon"></HomeIcon>
            </StyledNavLink>
            <StyledNavLink onClick={() => setIsOpen(false)} to="/movies">
              Movies
              <FilmIcon></FilmIcon>
            </StyledNavLink>
          </nav>
        </HeaderMenu>
      )}

      <MenuIcon onClick={() => setIsOpen(true)}></MenuIcon>
    </PageHeader>
  );
}

export default Header;
