import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(210px, auto);
  gap: 10px;

  margin-top: ${p => p.theme.space[4]}px;
  font-size: 10px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 16px) / 2);
  border: 1px solid ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 20px;
`;
