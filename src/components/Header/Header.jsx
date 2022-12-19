import {
  MobileMenu,
  Logo,
  MenuIcon,
  PageHeader,
  Wraper,
} from './Header.styled';
import { useState } from 'react';
import Navigation from 'components/Navigation';

function Header() {
  const [isOpen, setIsOpen] = useState();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <PageHeader>
      <Logo to="/home/trending">Moviemania</Logo>
      {isOpen && (
        <MobileMenu>
          <Navigation closeMenu={closeMenu}></Navigation>
        </MobileMenu>
      )}
      <MenuIcon onClick={() => setIsOpen(true)}></MenuIcon>
      <Wraper>
        <Navigation></Navigation>
      </Wraper>
    </PageHeader>
  );
}

export default Header;
