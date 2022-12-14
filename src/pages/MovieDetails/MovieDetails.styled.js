import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.accentText};
  transition: font-size ${p => p.theme.transitions.tDuration}
    ${p => p.theme.transitions.tTimingFunction};

  :hover {
    font-size: 28px;
  }
  &.active {
    background-color: ${p => p.theme.colors.active};
    color: ${p => p.theme.colors.accentText};
  }
`;

export const Geners = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  span {
    color: ${p => p.theme.colors.accentText};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    border: 2px solid ${p => p.theme.colors.text};
    border-radius: ${p => p.theme.radii.md};
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
    :not(:last-child) {
      margin-right: ${p => p.theme.space[4]}px;
    }
  }
`;

export const Heading = styled.h3`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #191919;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  transition: color ${p => p.theme.transitions.tDuration}
    ${p => p.theme.transitions.tTimingFunction};

  svg {
    fill: ${p => p.theme.colors.text};
    margin-left: ${p => p.theme.space[2]}px;
    width: 38px;
    height: auto;
    transition: scale ${p => p.theme.transitions.tDuration}
        ${p => p.theme.transitions.tTimingFunction},
      fill ${p => p.theme.transitions.tDuration}
        ${p => p.theme.transitions.tTimingFunction};
  }

  &.active {
    color: ${p => p.theme.colors.accentText};

    svg {
      fill: ${p => p.theme.colors.accentText};
      scale: 1.07;
    }
  }

  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    :hover {
      color: ${p => p.theme.colors.accentText};
      svg {
        fill: ${p => p.theme.colors.accentText};
        scale: 1.07;
      }
    }
  }
`;

export const ListItem = styled.li`
  border-top: 1px solid ${p => p.theme.colors.text};

  :last-child {
    border-bottom: 1px solid ${p => p.theme.colors.text};
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  margin-right: ${p => p.theme.space[4]}px;
  text-decoration: none;
  transition: color ${p => p.theme.transitions.tDuration}
      ${p => p.theme.transitions.tTimingFunction},
    font-size ${p => p.theme.transitions.tDuration}
      ${p => p.theme.transitions.tTimingFunction};
  cursor: pointer;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accentText};
    font-size: 23px;
  }

  &.active {
    color: ${p => p.theme.colors.accentText};
    font-size: 23px;
  }
`;
