"use client";

import { ProjectDetailTypes } from "@/lib/types";
import {
  Box,
  Chip,
  Grid2,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondaryBackground,
  height: "100%",
  padding: "3rem",
  "& div": {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    maxHeight: 350,
    minHeight: 200,
    borderRadius: 10,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    "& img": {
      width: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
  },
}));

const StyledProectInfoWrapper = styled(Box)(({ theme }) => ({
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  "&>div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
  },
}));

export default function ProjectDetail({
  previewImage,
  url,
  name,
  description,
  technologies,
}: ProjectDetailTypes) {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <StyledImageWrapper>
          <Link href={url} target="_blank">
            <Box>
              <picture>
                <img src={previewImage} alt={"Project preview image"} />
              </picture>
            </Box>
          </Link>
        </StyledImageWrapper>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <StyledProectInfoWrapper>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="body1" align="left">
            {description}
          </Typography>
          <Box>
            {technologies.map((technologyName: string, i: number) => (
              <Chip
                key={i}
                label={
                  <Typography variant="body1" fontWeight={500}>
                    {technologyName}
                  </Typography>
                }
              />
            ))}
          </Box>
          <IconButton LinkComponent={Link} href={url} target="_blank">
            <ExternalLink />
          </IconButton>
        </StyledProectInfoWrapper>
      </Grid2>
    </Grid2>
  );
}
