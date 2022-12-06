import styled from 'styled-components';

export const StyledForm = styled.form`
  display: inline-flex;
  justify-content: center;
  position: relative;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    display: inline;
  }
`;

export const Input = styled.input`
  display: inline-block;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.text};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  width: 100%;
  max-width: 600px;
  font: inherit;
  /* font-size: 30px; */
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  display: inline-block;
  position: absolute;
  background-color: ${p => p.theme.colors.text};
  right: ${p => p.theme.space[4]}px;
  width: 64px;
  height: 64px;
  border: 0;
  border-radius: 30px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  svg {
    width: 20px;
    height: auto;
  }

  :hover {
    opacity: 1;
  }
`;
