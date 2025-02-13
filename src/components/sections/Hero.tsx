import { Grid2 } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import HeroDetail from "../general/HeroDetail";
import HeroImage from "../general/HeroImage";

export default function Hero() {
  return (
    <SectionLayout id="hero">
      <Grid2 container width={"100%"} spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
          <HeroImage />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
          <HeroDetail />
        </Grid2>
      </Grid2>
    </SectionLayout>
  );
}
