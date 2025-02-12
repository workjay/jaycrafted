import { Box, styled } from "@mui/material";

interface ImageWrapperProps {
  children: React.ReactNode;
}

const StyledImageWrapper = styled(Box)(() => ({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export default function ImageWrapper({ children }: ImageWrapperProps) {
  return <StyledImageWrapper>{children}</StyledImageWrapper>;
}
