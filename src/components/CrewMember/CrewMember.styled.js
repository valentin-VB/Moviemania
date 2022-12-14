import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;
