import styled from 'styled-components';

export const Wraper = styled.div`
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;

  iframe {
    width: 100%;
    height: calc(100vw / 1.77); /* 16:9 */
    margin: 0;
  }

  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    iframe {
      width: 100%;
      height: calc(800px / 1.77);
    }
  }
`;
