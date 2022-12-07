import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesCategories = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accentText};
    scale: 1.05;
  }

  &.active {
    color: ${p => p.theme.colors.accentText};
    scale: 1.05;
  }
`;
