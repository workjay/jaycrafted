import { Box } from "@mui/material";
import BodyContainer from "./BodyContainer";

interface SectionLayoutProps {
  children: React.ReactNode;
  id?: string;
  diffBg?: boolean;
}

export default function SectionLayout({
  children,
  id,
  diffBg,
}: SectionLayoutProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "2rem", sm: "3rem", md: "5rem" },
        textAlign: "center",
        backgroundColor: diffBg ? "secondaryBackground" : "unset",
      }}
      id={id}
    >
      <BodyContainer>{children}</BodyContainer>
    </Box>
  );
}
