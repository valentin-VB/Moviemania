import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
`;

export const ListItem = styled.li`
  border: 1px solid ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  padding: ${p => p.theme.space[4]}px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 25px;
  text-align: justify;
`;
