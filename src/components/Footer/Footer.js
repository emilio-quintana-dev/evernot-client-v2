import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import { Button } from "../../globalStyles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="https://emilioquintana.dev" target="_blank">
              <SocialIcon />
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/emilio.quintana.50/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/equintanalopez/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="http://www.linkedin.com/in/emilio-quintana-dev"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
