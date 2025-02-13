"use client";

import { SOCIAL_LINKS } from "@/lib/data";
import { SocialLinkTypes } from "@/lib/types";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import { useThemeContext } from "../ThemeProvider";
import Image from "next/image";

interface SocialIconsProps {
  align?: "center" | "left" | "right";
}

export default function SocialIcons({ align = "center" }: SocialIconsProps) {
  const { mode } = useThemeContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: align,
        alignItems: "center",
        gap: "5px",
      }}
    >
      {SOCIAL_LINKS.map((socialLink: SocialLinkTypes) => (
        <IconButton
          key={socialLink.url}
          href={socialLink.url}
          target="_blank"
          LinkComponent={Link}
        >
          <Image
            src={
              mode === "dark" && socialLink.darkModeIcon
                ? socialLink.darkModeIcon
                : socialLink.icon
            }
            alt={socialLink.iconAlt}
            width={24}
            height={24}
          />
        </IconButton>
      ))}
    </Box>
  );
}
