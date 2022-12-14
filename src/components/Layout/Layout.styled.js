import styled from 'styled-components';

export const Wraper = styled.div`
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    display: grid;
    grid-template-columns: minmax(256px, 290px) 5fr;
    height: 100vh;
  }
`;
