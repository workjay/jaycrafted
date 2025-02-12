"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ImageWrapper from "./ImageWrapper";
import { useThemeContext } from "../ThemeProvider";
import Image from "next/image";
import { SkillDetailTypes } from "@/lib/types";

export default function SkillDetail({
  url,
  logo,
  darkModeLogo,
  label,
}: SkillDetailTypes) {
  const { mode } = useThemeContext();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Link href={url} target="_blank">
        <ImageWrapper>
          <Image
            src={darkModeLogo && mode === "dark" ? darkModeLogo : logo}
            alt={label}
            width={65}
            height={65}
          />
        </ImageWrapper>
      </Link>
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
}
