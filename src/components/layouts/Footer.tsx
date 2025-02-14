"use client";

import { Typography, Link, Box } from "@mui/material";
import { Copyright } from "lucide-react";
import BodyContainer from "./BodyContainer";
import { useThemeContext } from "../ThemeProvider";
import { EXTERNAL_LINKS } from "@/lib/data";

export default function Footer() {
  const { mode } = useThemeContext();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        bgcolor: "secondaryBackground",
        color: "text.primary",
      }}
    >
      <BodyContainer>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap="wrap"
          textAlign={"center"}
        >
          <Copyright size={16} />
          &nbsp;
          <Typography variant="body1">
            {new Date().getFullYear()} | Designed and
          </Typography>
          &nbsp;
          <Link
            href={EXTERNAL_LINKS.GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "inherit",
              textUnderlineOffset: "4px",
              textDecorationColor: "inherit",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                "&:hover": {
                  color: mode === "light" ? "#111827" : "#EEEEEE",
                },
              }}
            >
              coded
            </Typography>
          </Link>
          &nbsp;
          <Typography variant="body1">with ❤️ by Jay Depani</Typography>
        </Box>
      </BodyContainer>
    </Box>
  );
}
