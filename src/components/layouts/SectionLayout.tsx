import { Box } from "@mui/material";
import BodyContainer from "./BodyContainer";

interface SectionLayoutProps {
  children: React.ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "2rem", sm: "3rem", md: "5rem" },
        textAlign: "center",
      }}
    >
      <BodyContainer>{children}</BodyContainer>
    </Box>
  );
}
