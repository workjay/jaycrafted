"use client";

import { styled, keyframes } from "@mui/material";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const StyleTypography = styled("span")(() => ({
  animation: `${wave} 2s linear 3`,
  display: "inline-block",
  fontSize: "3rem",
  marginLeft: "0.5rem",
  "&:hover": {
    animation: "none",
  },
  "&:hover::after": {
    content: '""',
    animation: `${wave} 2s linear 3`,
  },
}));

export default function AnimateWavingHand() {
  return <StyleTypography>👋</StyleTypography>;
}
