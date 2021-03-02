import { useState } from "react";
import { Link } from 'react-router-dom';
import Video from "../../video/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  Button
} from "./HeroElements";
import Social from "./Social";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <Social/>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>APNA SAPANA</HeroH1>
        <HeroP>
          Happiness is not a goal, it is a reward! Everthing begin with an idea
        </HeroP>
        <HeroBtnWrapper>
        <Link to='/form'>
          <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Submit Idea </Button>
            </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
