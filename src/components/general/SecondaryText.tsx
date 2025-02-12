"use client";

import { styled, Typography, TypographyProps } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}));

export default function SecondaryText({ children }: TypographyProps) {
  return <StyledTypography variant="body1">{children}</StyledTypography>;
}
