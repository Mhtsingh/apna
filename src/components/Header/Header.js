import {useState, useEffect} from 'react';
import {animateScroll as scroll } from 'react-scroll'
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  // const [isForm, setIsForm] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer >
          <NavLogo to="/" onClick={toggleHome} >< img src={require('../../images/headLogo.png').default}/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="process" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Process</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Conatct Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/form">Submit Idea!</NavBtnLink>
          </NavBtn>
           {/* {(
           if (window.location.pathname === '/form')
           return null;
           
           else{
           
           }
           )} */}
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Header;
