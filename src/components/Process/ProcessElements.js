import styled from "styled-components";

export const ProcessContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e7b24;
  width: auto;

  @media screen and (max-width: 1000px) {
    height: 600px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const ProcessWrapper = styled.div`
  ${'' /* max-width: 1000px; */}
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  width: 100%;
  padding: 0 60px;

  @media screen and (max-width: 1000px) {

    grid-template-columns: 1fr 1fr 1fr ;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProcessCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  max-height: 340px;
  border-radius: 10px solid red;
  padding: 30px;
  ${'' /* box-shadow: 0 1px 3px red; */}
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    translation: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProcessIcon = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
`;

export const ProcessH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff ;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 786px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const ProcessH2 = styled.h2`
color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProcessP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProcessDots3 = styled.div`

display: inline-block;
  vertical-align: top;
  ${'' /* padding-bottom: 10px; */}
  position: relative;
  text-align: center;
  ${'' /* padding: 20px 10px; */}
  line-height: 24px;
  min-width: 100px;
  ${'' /* background: #333; */}
  font-size: 20px;
  color: #fff;

    &:before{
      transform: translateX(-50%);
    border-radius: 100%;
    position: absolute;
    background: #fff;
    bottom: 10px;
    height: 8px;
    content: '';
    width: 8px;
    left: 0%;
    }
`

export const ProcessDots1 = styled.div`

display: inline-block;
  vertical-align: top;
  ${'' /* padding-bottom: 10px; */}
  position: relative;
  text-align: center;
  ${'' /* padding: 20px 10px; */}
  line-height: 24px;
  min-width: 100px;
  ${'' /* background: #333; */}
  font-size: 20px;
  color: #fff;

    &:before{
      transform: translateX(-50%);
    border-radius: 100%;
    position: absolute;
    background: blue;
    bottom: 10px;
    height: 8px;
    content: '';
    width: 8px;
    left: 50%;
    }
`
export const ProcessDots2 = styled.div`

display: inline-block;
  vertical-align: top;
  ${'' /* padding-bottom: 10px; */}
  position: relative;
  text-align: center;
  ${'' /* padding: 20px 10px; */}
  line-height: 24px;
  min-width: 100px;
  ${'' /* background: #333; */}
  font-size: 20px;
  color: #fff;

    &:before{
      transform: translateX(-50%);
    border-radius: 100%;
    position: absolute;
    background: #fff;
    bottom: 10px;
    height: 8px;
    content: '';
    width: 8px;
    left: 100%;
    }
`