import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesCategories = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    color: ${p => p.theme.colors.accentText};
  }
  // For PC

  /* &.active {
    background-color: ${p => p.theme.colors.active};
    color: ${p => p.theme.colors.accentText};
  } */
`;
