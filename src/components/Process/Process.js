import {
  ProcessContainer,
  ProcessCard,
  ProcessH1,
  ProcessH2,
  ProcessIcon,
  ProcessDots1,
  ProcessDots2,
  ProcessDots3,
  ProcessWrapper,
} from "./ProcessElements";


import Icon1 from '../../images/Funding.png';
import Icon2 from '../../images/Research.png';
import Icon3 from '../../images/development.png';
import Icon4 from '../../images/Marketing.png';
import Icon5 from '../../images/management.png';
import Icon6 from '../../images/launch.png';

const Process = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <ProcessContainer id="process">
      <ProcessH1>APNA SAPANA Offerings</ProcessH1>
         <ProcessWrapper className="slider">
      {/* <Slider {...settings}> */}
        <ProcessCard>
          <ProcessIcon src={Icon1} />
          <ProcessH2>Funding</ProcessH2>
        </ProcessCard>

        <ProcessCard>
          <ProcessIcon src={Icon2} />
          <ProcessH2>Research</ProcessH2>
        </ProcessCard>
        <ProcessCard>

          <ProcessIcon src={Icon3} />
          <ProcessH2>Development</ProcessH2>
        </ProcessCard>
        <ProcessCard>

          <ProcessIcon src={Icon4} />
          <ProcessH2>Marketing</ProcessH2>
        </ProcessCard>

        <ProcessCard>
          <ProcessIcon src={Icon5} />
          <ProcessH2>Management</ProcessH2>
        </ProcessCard>

        <ProcessCard>
          <ProcessIcon src={Icon6} />
          <ProcessH2>Launch</ProcessH2>
        </ProcessCard>
        {/* </Slider> */}
      </ProcessWrapper>
    </ProcessContainer>
  );
};

export default Process;
