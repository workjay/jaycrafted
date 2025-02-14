import { Box, Typography } from "@mui/material";
import PrimaryHeader from "./PrimaryHeader";
import AnimateWavingHand from "./AnimateWavingHand";
import { MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";
import SocialIcons from "./SocialIcons";
import { calculateExperience } from "@/lib/utils";

export default function HeroDetail() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} alignItems={"center"}>
        <PrimaryHeader highlightedText="Jay">Hi, I&apos;m </PrimaryHeader>
        <AnimateWavingHand />
      </Box>
      <Typography variant="body1" align="left">
        I&apos;m a Full Stack Developer (React.js & Node.js) who loves building
        fast, accessible, and responsive web applications. Even after&nbsp;
        {calculateExperience()} years in the field, I still enjoy coding as much
        as I did on day one.
      </Typography>
      <Box my={4} display={"flex"} flexDirection={"column"} gap={1}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MapPin />
          <Typography variant="body1">Ahmedabad, Gujarat, India</Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <StatusBadge />
          <Typography variant="body1" align="left">
            Let&apos;s build something amazing together!
          </Typography>
        </Box>
      </Box>
      <SocialIcons align="left" />
    </Box>
  );
}
