import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;

  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const ListItem = styled.li`
  @media screen and (max-width: ${p => p.theme.sizes.phone}) {
    :not(:last-child) {
      margin-bottom: ${p => p.theme.space[5]}px;
    }
  }
`;

export const Wraper = styled.div`
  position: relative;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid ${p => p.theme.colors.text};
  overflow: hidden;
  height: max-content;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms;
  :hover,
  :focus {
    box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.12),
      0px 5px 5px rgba(255, 255, 255, 0.06),
      2px 5px 7px rgba(255, 255, 255, 0.16);
    scale: 103%;
  }
`;

export const MovieInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 22px;
  background-color: rgba(232, 232, 232, 0.15);
  backdrop-filter: blur(2.5px);
  border-radius: 0px 0px 0px 50px;
  width: 30%;
  height: 10%;
  right: 0;
  top: 0;
  color: ${p => p.theme.colors.white};

  svg {
    width: 20px;
    fill: gold;
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
