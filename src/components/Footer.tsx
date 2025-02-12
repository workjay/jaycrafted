"use client";

import { Container, Typography, Link, Box } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { useThemeContext } from "./ThemeProvider";

export default function Footer() {
  const { mode } = useThemeContext();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 4,
        textAlign: "center",
        bgcolor: "secondaryBackground",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Copyright sx={{ fontSize: 16, verticalAlign: "middle" }} />
          &nbsp;
          <Typography variant="body1">
            {new Date().getFullYear()} | Designed and
          </Typography>
          &nbsp;
          <Link
            href="https://github.com/workjay/jaydepani.dev"
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
      </Container>
    </Box>
  );
}
