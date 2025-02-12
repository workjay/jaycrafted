import { Box } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import PrimaryHeader from "../general/PrimaryHeader";
import SecondaryText from "../general/SecondaryText";
import { EXPERIENCES } from "@/lib/data";
import ExperienceDetail from "../general/ExperienceDetail";
import { ExperienceDetailTypes } from "@/lib/types";

export default function Experience() {
  return (
    <SectionLayout>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="Journey">Career </PrimaryHeader>
        <SecondaryText>
          A quick look at my latest professional journey:
        </SecondaryText>
        <Box display={"flex"} flexDirection={"column"} gap={4} mt={4}>
          {EXPERIENCES.map(
            (experience: ExperienceDetailTypes, index: number) => (
              <ExperienceDetail {...experience} key={index} />
            )
          )}
        </Box>
      </Box>
    </SectionLayout>
  );
}
