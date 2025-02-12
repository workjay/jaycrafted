"use client";

import { ExperienceDetailTypes } from "@/lib/types";
import { Box, Card, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { useThemeContext } from "../ThemeProvider";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

export default function ExperienceDetail({
  logo,
  darkModeLogo,
  logoAlt,
  startDate,
  endDate,
  currentlyWorkHere,
  position,
  summary,
}: ExperienceDetailTypes) {
  const { mode } = useThemeContext();

  return (
    <Card sx={{ padding: "30px" }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            justifyContent={"flex-start"}
            gap={1}
          >
            <Image
              src={darkModeLogo && mode === "dark" ? darkModeLogo : logo}
              alt={logoAlt}
              width={120}
              height={40}
            />
            <Typography variant="body1" align="left">
              {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                startDate
              )}
              &nbsp;-&nbsp;
              {currentlyWorkHere
                ? "Present"
                : endDate
                ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                    endDate
                  )
                : "NA"}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            justifyContent={"flex-start"}
            gap={1}
          >
            <Typography variant="h3" align="left">
              {position}
            </Typography>
            <ul>
              {summary?.map((item, index) => {
                return (
                  <li key={index}>
                    <Typography variant="body1" align="left">
                      {item}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Grid2>
      </Grid2>
    </Card>
  );
}
