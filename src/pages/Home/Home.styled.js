import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesCategories = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  transition: color ${p => p.theme.transitions.tDuration}
      ${p => p.theme.transitions.tTimingFunction},
    scale ${p => p.theme.transitions.tDuration}
      ${p => p.theme.transitions.tTimingFunction};
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
