import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    display: block;
  }
`;

export const Logo = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accentText};
  padding-left: ${p => p.theme.space[5]}px;
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    margin-bottom: ${p => p.theme.space[6]}px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: ${p => p.theme.sizes.phone}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${p => p.theme.colors.secondary};
    padding-left: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[5]}px;
    font-size: 40px;
    font-weight: 500;
    z-index: 100000;
  }
`;

export const Wraper = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.sizes.pc}) {
    display: block;
  }
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  display: none;
  @media screen and (max-width: ${p => p.theme.sizes.phone}) {
    display: block;
    width: 33px;
    height: auto;
    fill: ${p => p.theme.colors.accentText};
    padding-right: ${p => p.theme.space[4]}px;
  }
`;
