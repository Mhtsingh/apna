import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
background: #fff;
  ${'' /* background: ${({ scrollNav}) => (scrollNav ? '#000' : 'transparent')}; */}
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkRouter)`
margin-top: 20px;
justify-self: flex-start;
  ${'' /* color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none; */}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: position;
    color: #0E7B24;
  }
`;

export const NavMenu = styled.ul`
    display:flex;
    ${'' /* align-items: center; */}
    list-style: none;
    text-align: center;
    margin-left: 13rem;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #000;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
    color: #0E7B24;
    ${'' /* border-bottom: 3px solid #0E7B24; */}
  }  
  &.active {
    ${'' /* border-bottom: 3px solid #0E7B24; */}
    color: #0E7B24;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
text-transform: uppercase;
  border-radius: 50px;
  background:  #0E7B24;
  white-sapce: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 33px;

  &:hover{
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        background: #36454F;
        color: #fff;
    }
`;

