import { keyframes } from 'styled-components';
import styled from 'styled-components';

const drag = keyframes`
  0% {
    transform: translateY(30%);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(30%);
  }
`;

export const Link = styled.a`
  position: fixed;
  bottom: ${p => p.theme.space[5]}px;
  right: ${p => p.theme.space[5]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.accent};
  animation: ${drag} 2s ease-in-out infinite;
  :hover {
    color: ${p => p.theme.colors.accentText};
  }

  svg {
    width: 60px;
    height: auto;
  }
`;
