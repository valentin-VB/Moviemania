import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { IoFilmOutline } from 'react-icons/io5';

export const Wraper = styled.nav`
  display: none;
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const HomeIcon = styled(GrHomeRounded)`
  margin-left: ${p => p.theme.space[4]}px;

  path {
    stroke: ${p => p.theme.colors.text};
  }
`;

export const FilmIcon = styled(IoFilmOutline)`
  margin-left: ${p => p.theme.space[4]}px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.accentText};
  path {
    stroke: ${p => p.theme.colors.accentText};
  }

  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    font-size: ${p => p.theme.fontSizes.l};
    width: 98%;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    margin-bottom: 0px;
    color: ${p => p.theme.colors.text};
    path {
      stroke: ${p => p.theme.colors.text};
    }

    svg {
      width: 40px;
    }

    :hover,
    :focus {
      color: ${p => p.theme.colors.accentText};
      path {
        stroke: ${p => p.theme.colors.accentText};
      }
    }

    &.active {
      background-color: ${p => p.theme.colors.active};
      color: ${p => p.theme.colors.accentText};
      border-right: 8px solid ${p => p.theme.colors.accentText};
      path {
        stroke: ${p => p.theme.colors.accentText};
      }
    }
  }
`;
