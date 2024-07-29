"use client";
import React, { useEffect, useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { projects } from "@/constants/constants";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  useEffect(() => {
    async function getAllProjects() {
      try {
        const res = await fetch(
          "https://www.ahmed.alaa1144.apis.mrbotusa.com/api/projects",
          config
        );
        if (res) {
          setProjects(await res.json());
        }
      } catch (error) {
        console.error(error);
      }
    }

    getAllProjects();
  }, []);
  return (
    <Section nopadding>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects &&
          projects.map(
            ({ image, title, description, tags, source, visit }, index) => (
              <BlogCard key={index}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks target="_blank" href={source}>
                    Code
                  </ExternalLinks>
                  <ExternalLinks target="_blank" href={visit}>
                    Visit
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
      </GridContainer>
    </Section>
  );
}
