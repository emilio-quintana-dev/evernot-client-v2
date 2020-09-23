import React, { useState, useEffect } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoText,
} from "./Navbar.elements";
import { FaBars, FaGlasses, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              <LogoText>evernot.dev</LogoText>
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            {props.login ? (
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to="/">Home</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to="/about">About</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to="/login" onClick={props.setLogin(false)}>
                    Log out
                  </NavLinks>
                </NavItem>
              </NavMenu>
            ) : (
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to="/login">Log In</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to="/signup">Sign up</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to="/about">About</NavLinks>
                </NavItem>
              </NavMenu>
            )}
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;