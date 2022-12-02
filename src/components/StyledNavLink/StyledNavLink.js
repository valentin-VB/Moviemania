import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.accentText};
  :hover {
    font-size: 28px;
  }

  /* &.active {
    background-color: ${p => p.theme.colors.active};
    color: ${p => p.theme.colors.accentText};
  } */
`;
