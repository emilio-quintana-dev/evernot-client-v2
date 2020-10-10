import styled from "styled-components";
import { Container } from "../../globalStyles";
import { AiOutlineCodepen } from "react-icons/ai";

import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #192734;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;
`;

export const NavIcon = styled(AiOutlineCodepen)`
  margin-right: 1rem;
  font-size: 3rem;
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: rgba(21, 30, 41, 1);
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b69f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color: #fff;

  @media screen and (max-width: 960px) {
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #2f004f;
      transition: all 0.3s ease;
    }
  }
`;
