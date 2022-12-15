import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.nav`
  display: none;
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.accentText};

  span {
    margin-right: ${p => p.theme.space[4]}px;
  }

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
    background-color: inherit;
    transition: color ${p => p.theme.transitions.tDuration}
        ${p => p.theme.transitions.tTimingFunction},
      background-color ${p => p.theme.transitions.tDuration}
        ${p => p.theme.transitions.tTimingFunction},
      border ${p => p.theme.transitions.tDuration}
        ${p => p.theme.transitions.tTimingFunction};
  }

  path {
    stroke: ${p => p.theme.colors.text};
    transition: stroke ${p => p.theme.transitions.tDuration}
      ${p => p.theme.transitions.tTimingFunction};
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
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.accentText};
    border-right: 8px solid ${p => p.theme.colors.accentText};
    path {
      stroke: ${p => p.theme.colors.accentText};
    }
  }
`;
