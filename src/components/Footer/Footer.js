import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import pdf from '../../documents/APNA_SAPANA_Agreement.pdf'
import pdf2 from '../../documents/APNA_SAPANA_Confidentiality.pdf'


import {
  FooterContainer,
  FooterWrap,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
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
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="">How it works</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Privacy Policies</FooterLink>
              <FooterLink to="">Terms of Service</FooterLink>
            </FooterLinkItems>
           
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
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
              {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
