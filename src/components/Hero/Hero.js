import React, { useRef } from "react";
import Typed from "typed.js";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { Span } from "../Header/HeaderStyles";

const Hero = () => {
  const el = useRef();
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " To<br />My Personal Portfolio",
        "<br />I'm Ahmed Alaa",
        "<br />I'm A Front-End Developer<br />Using React Js",
      ],
      typeSpeed: 150,
      backSpeed: 100,
      loop: false,
    });
  });
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome
          <span ref={el}></span>
        </SectionTitle>
        <SectionText>
          As a <span>Front-End Developer</span>, I utilize React.js, Next.js,
          Vite.js, and Tailwind CSS to craft stunning websites that captivate
          audiences worldwide. My portfolio showcases a collection of
          exceptional and awe-inspiring creations.
        </SectionText>
        <Button>
          <a href="https://drive.google.com/u/0/uc?id=1ysEPFMhB4BXCFtADtwkZN8vwvnQYzXnS&export=download" download >Download CV</a>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
