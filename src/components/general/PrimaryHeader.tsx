"use client";

import { styled, Typography, TypographyProps } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  "&>span": {
    color: theme.palette.primary.main,
  },
}));

interface PrimaryHeaderProps extends TypographyProps {
  highlightedText?: string;
}

export default function PrimaryHeader({
  children,
  highlightedText,
  ...props
}: PrimaryHeaderProps) {
  return (
    <StyledTypography variant="h1" {...props}>
      {children}&nbsp;<span>{highlightedText}</span>
    </StyledTypography>
  );
}
