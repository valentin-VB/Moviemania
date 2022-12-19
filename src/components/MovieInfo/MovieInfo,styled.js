import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const IMDbLink = styled.a`
  display: flex;
  color: ${p => p.theme.colors.accentText};
`;
