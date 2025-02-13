"use client";

import { styled, Box, keyframes } from "@mui/material";

const StatusIconWrapper = styled(Box)({
  display: "flex",
  height: 24,
  width: 24,
  alignItems: "center",
  justifyContent: "center",
});

const StatusIndicator = styled(Box)({
  position: "relative",
  display: "flex",
  height: 12,
  width: 12,
});

const ping = keyframes`
  0% { transform: scale(1); opacity: 0.75; }
  75% { transform: scale(2); opacity: 0; }
  100% { transform: scale(2.5); opacity: 0; }
`;

const PingEffect = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  opacity: 0.75,
  animation: `${ping} 1.5s infinite`,
}));

const StatusDot = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 12,
  width: 12,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
}));

export default function StatusBadge() {
  return (
    <StatusIconWrapper>
      <StatusIndicator>
        <PingEffect />
        <StatusDot />
      </StatusIndicator>
    </StatusIconWrapper>
  );
}
