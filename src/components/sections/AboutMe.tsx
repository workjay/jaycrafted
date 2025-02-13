import { Box, Grid2 } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import PrimaryHeader from "../general/PrimaryHeader";
import AboutMeImage from "../general/AboutMeImage";
import AboutMeDetail from "../general/AboutMeDetail";

export default function AboutMe() {
  return (
    <SectionLayout id="about">
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="me">About </PrimaryHeader>
        <Grid2 container spacing={4} mt={4} width={"100%"}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <AboutMeImage />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <AboutMeDetail />
          </Grid2>
        </Grid2>
      </Box>
    </SectionLayout>
  );
}
