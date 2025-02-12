import { SOCIAL_LINKS } from "@/lib/data";
import { SocialLinkTypes } from "@/lib/types";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
          <socialLink.icon />
        </IconButton>
      ))}
    </Box>
  );
}
