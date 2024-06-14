import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>CAll</LinkTitle>
          <LinkItem href="tel:+20120713250">+20 1207213250</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ahmed.alla56756@gmail.com">
            ahmed.alla56756@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This Portfolio made by Ahmed Alaa, &copy; Last updated At {new Date().getFullYear()} {new Date().getMonth()+1}.</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons target="_blank" href="https://github.com/Ahmedalla1144">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://linkedin.com/in/ahmed-alaa1144">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.instagram.com/ahmed_alla3/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.facebook.com/ahmed.alla.313">
          <AiFillFacebook size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
