"use client";

import { Box, styled } from "@mui/material";

const ImageContainer = styled(Box)({
  position: "relative",
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(8px)",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
  "&:hover": {
    transform: "rotate(5deg) scale(1.05)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
  transition: "transform 0.4s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export default function HeroImage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ImageContainer>
        <StyledImage src="/images/profile-image.enc" alt="Profile Picture" />
      </ImageContainer>
    </Box>
  );
}
