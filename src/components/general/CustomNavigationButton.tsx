"use client";

import { Box, styled } from "@mui/material";
import React from "react";

const StyledDiv = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  zIndex: 10,
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  cursor: "pointer",
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[4],
  transition: "background-color 0.5s ease, color 0.5s ease",
  backgroundColor: theme.palette.primary.main,
  "&>svg": {
    color: theme.palette.common.white,
    transition: "color 0.5s ease",
  },
  "&:hover": {
    backgroundColor: theme.palette.common.white,
    "&>svg": {
      color: theme.palette.primary.main,
    },
  },
}));

interface CustomNavigationButtonProps {
  direction: "prev" | "next";
  icon: React.ReactNode;
  onClick: () => void;
}

export default function CustomNavigationButton({
  direction,
  onClick,
  icon,
}: CustomNavigationButtonProps) {
  return (
    <StyledDiv
      onClick={onClick}
      color="primary"
      sx={{
        left: direction === "prev" ? "0px" : "auto",
        right: direction === "next" ? "0px" : "auto",
      }}
    >
      {icon}
    </StyledDiv>
  );
}
