import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

export const Wrapper = styled.div`
  iframe {
    width: 100%;
    height: calc(100vw / 1.77); /* 16:9 */
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
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const Heading = styled.h3`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const BackIcon = styled(MdArrowBackIosNew)``;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  margin-right: ${p => p.theme.space[4]}px;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.accentText};
  }
`;
