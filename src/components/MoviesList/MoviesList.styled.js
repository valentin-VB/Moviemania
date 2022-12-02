import styled from 'styled-components';

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
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
`;

export const MovieInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  color: rgba(232, 232, 232, 0.6);
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: rgba(232, 232, 232, 0.8); ;
`;
