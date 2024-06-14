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
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function getAllProjects() {
      try {
        const res = await axios.get("http://localhost:8000/api/projects");
        if (res.data) {
          setProjects(res.data);
          console.log(res.data);
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
