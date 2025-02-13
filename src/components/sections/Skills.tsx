import { Box, Grid2 } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import PrimaryHeader from "../general/PrimaryHeader";
import SecondaryText from "../general/SecondaryText";
import { SkillDetailTypes } from "@/lib/types";
import SkillDetail from "../general/SkillDetail";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <SectionLayout id="skills">
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="Skills">Specialized </PrimaryHeader>
        <SecondaryText>
          I have strong expertise in a wide range of skills, tools, and
          technologies, enabling me to build high-quality, efficient, and
          scalable solutions. Here are some of the key technologies I specialize
          in:
        </SecondaryText>
        <Box display={"flex"} flexDirection={"column"} mt={4}>
          <Grid2 container spacing={4}>
            {SKILLS.map((skill: SkillDetailTypes, index: number) => (
              <Grid2 key={index} size={{ md: 2, xs: 6, sm: 4 }}>
                <SkillDetail {...skill} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </SectionLayout>
  );
}
