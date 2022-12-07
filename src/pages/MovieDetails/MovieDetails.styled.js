import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.accentText};

  :hover {
    font-size: 28px;
  }
  &.active {
    background-color: ${p => p.theme.colors.active};
    color: ${p => p.theme.colors.accentText};
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
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

export const BackIcon = styled(MdArrowBackIosNew)``;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  margin-right: ${p => p.theme.space[4]}px;
  text-decoration: none;
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

export const ListItem = styled.li`
  border-top: 1px solid ${p => p.theme.colors.text};

  :last-child {
    border-bottom: 1px solid ${p => p.theme.colors.text};
  }
`;
