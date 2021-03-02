import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 5px;
  background:  #C9302C;
  white-sapce: nowrap;
  padding: 8px 25px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 33px;


  &:hover{
        color: white;
        text-decoration: none;
  }
  `