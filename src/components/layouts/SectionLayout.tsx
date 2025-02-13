import { Box } from "@mui/material";
import BodyContainer from "./BodyContainer";

interface SectionLayoutProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionLayout({ children, id }: SectionLayoutProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "2rem", sm: "3rem", md: "5rem" },
        textAlign: "center",
      }}
      id={id}
    >
      <BodyContainer>{children}</BodyContainer>
    </Box>
  );
}
