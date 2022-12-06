import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(210px, auto);
  gap: 10px;

  margin-top: ${p => p.theme.space[4]}px;
  font-size: 10px;
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    grid-template-columns: repeat(7, 1fr);
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 16px) / 2);
  border: 1px solid ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms;
  :hover,
  :focus {
    box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.12),
      0px 5px 5px rgba(255, 255, 255, 0.06),
      2px 5px 7px rgba(255, 255, 255, 0.16);
    scale: 103%;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 20px;
`;
