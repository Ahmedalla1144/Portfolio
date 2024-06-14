import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            alignItems: "center",
            color: "white",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
