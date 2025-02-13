"use client";

import { Box, styled } from "@mui/material";
import Image from "next/image";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingBottom: 50,
  "&>div": {
    position: "relative",
    width: "max-content",
    "& .about-me-user": {
      position: "absolute",
      bottom: "-45px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "& .about-me-sleep": {
      position: "absolute",
      top: "90px",
      left: "120px",
      filter: theme.palette.mode === "light" ? "invert(1)" : "none",
    },
    [theme.breakpoints.down("sm")]: {
      "& .about-me-bg": {
        width: 350,
        height: 250,
      },
      "& .about-me-sleep": {
        top: "40px",
        left: "90px",
      },
    },
  },
}));

export default function AboutMeImage() {
  return (
    <StyledBox>
      <Box>
        <Image
          src="/images/about_me_bg.svg"
          alt="About me background image"
          width={400}
          height={300}
          className="about-me-bg"
        />
        <Image
          src="/images/about_me_user.svg"
          alt="About me user image"
          width={300}
          height={250}
          className="about-me-user"
        />
        <Image
          src="/images/about_me_sleep.svg"
          alt="About me sleep image"
          width={40}
          height={50}
          className="about-me-sleep"
        />
      </Box>
    </StyledBox>
  );
}
