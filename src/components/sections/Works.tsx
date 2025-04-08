"use client";

import { Box } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import PrimaryHeader from "../general/PrimaryHeader";
import SecondaryText from "../general/SecondaryText";
import { PROJECTS } from "@/lib/data";
import { ProjectDetailTypes } from "@/lib/types";
import ProjectDetail from "../general/ProjectDetail";
import PrimarySlider from "../general/PrimarySlider";
import { SwiperSlide } from "swiper/react";

const filteredProjects: ProjectDetailTypes[] = PROJECTS.filter(
  (project: ProjectDetailTypes) => !project.hidden
);

export default function Works() {
  return (
    <SectionLayout id="works">
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="Projects">Featured </PrimaryHeader>
        <SecondaryText>
          Highlights from my journey of building and collaborating on digital
          experiences:
        </SecondaryText>
        <Box display={"flex"} flexDirection={"column"} mt={4} width={"100%"}>
          <PrimarySlider>
            {filteredProjects.map((project: ProjectDetailTypes, i: number) => (
              <SwiperSlide key={i}>
                <ProjectDetail {...project} />
              </SwiperSlide>
            ))}
          </PrimarySlider>
        </Box>
      </Box>
    </SectionLayout>
  );
}
