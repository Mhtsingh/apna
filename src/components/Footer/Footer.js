import pdf from '../../documents/APNA_SAPANA_Agreement.pdf'
import pdf2 from '../../documents/APNA_SAPANA_Confidentiality.pdf'

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  SocailLogo, 
  WebsiteRight
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocailLogo to="/">< img src={require('../../images/footLogo.png').default}/></SocailLogo>
            <WebsiteRight>Apna Sapna © {new Date().getFullYear()}DharCorp dba APNA SAPANA - All rights reserved</WebsiteRight>
            <SocialIcons>
              <SocialIconLink href={pdf} target="_blank">
              Agreement
              </SocialIconLink>
              <SocialIconLink href={pdf2} target="_blank">
                Privacy Policies
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
