import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrHomeRounded } from 'react-icons/gr';
import { IoFilmOutline } from 'react-icons/io5';

export const PageHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.secondary};
`;

export const HeaderMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.secondary};
  padding-left: 40px;
  padding-top: 48px;
  padding-bottom: 48px;
  font-size: 40px;
  font-weight: 500;
  z-index: 100000;
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  fill: ${p => p.theme.colors.accentText};
`;

export const HomeIcon = styled(GrHomeRounded)`
  margin-left: ${p => p.theme.space[4]}px;

  path {
    stroke: ${p => p.theme.colors.accentText};
  }
`;

export const FilmIcon = styled(IoFilmOutline)`
  height: ;

  margin-left: ${p => p.theme.space[4]}px;
`;

export const Logo = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accentText};
`;
