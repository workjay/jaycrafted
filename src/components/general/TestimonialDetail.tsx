"use client";

import { TestimonialDetailTypes } from "@/lib/types";
import { Avatar, Box, Card, styled, Typography } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1.25rem",
  gap: "1.5rem",
  maxWidth: 350,
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
  },
}));

export default function TestimonialDetail({
  personName,
  testimonial,
  title,
  personAvatar,
}: TestimonialDetailTypes) {
  return (
    <StyledCard>
      <Avatar sx={{ height: "60px", width: "60px" }} src={personAvatar} />
      <Typography variant="body1" align="left">
        &ldquo;{testimonial}&rdquo;
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={"0.25rem"}>
        <Typography variant="h3">{personName}</Typography>
        <Typography variant="body2">{title}</Typography>
      </Box>
    </StyledCard>
  );
}
