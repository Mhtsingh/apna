import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient( 180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 55% ), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 80%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 100px 24px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  font-weight: bolder;
  text-transform: uppercase;
  color: #fff;
  margin-top: 11rem;
  margin-bottom: -35px;
  font-size: 6rem;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and ( max-width: 480px){
        font-size: 18px;
    }

`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Button = styled.button`
text-transform: uppercase;
  border-radius: 0 4px;
  background: ${({ primary }) => (primary ? '#0E7B24' : '#0467FB')};
  white-space: nowrap;
  padding: 15px 60px 15px 60px;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px 5px;
  &:hover {
    transition: all 0.3s ease-out;
    ${'' /* background: #fff !important; */}
    color: #000;
    background-color: #e5e4e2;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;