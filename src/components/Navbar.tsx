"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DownloadIcon from "@mui/icons-material/Download";
import { useThemeContext } from "./ThemeProvider";
import PrimaryButton from "./PrimaryButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleTheme, mode } = useThemeContext();

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "background.paper", color: "text.primary" }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 600 }}
          component={"a"}
          href="/"
        >
          {`<JR />`}
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 4 }}>
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      "&:hover": {
                        color: mode === "light" ? "#111827" : "#EEEEEE",
                      },
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Box>

            <Divider orientation="vertical" flexItem />

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton onClick={toggleTheme}>
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <PrimaryButton
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
                onClick={() => window?.open("/jay_depani_cv.pdf", "_blank")}
              >
                Download CV
              </PrimaryButton>
            </Box>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={toggleDrawer}>
                <CloseRoundedIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary="<JR />"
              slotProps={{
                primary: {
                  variant: "h4",
                  fontWeight: 600,
                },
              }}
            />
          </ListItem>
          <Divider />
          {navLinks.map(({ label, href }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                component={Link}
                href={href}
                onClick={toggleDrawer}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={toggleTheme}>
              <ListItemText primary="Switch Theme" />
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Box display={"flex"} justifyContent={"center"} width={"100%"}>
              <PrimaryButton
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
                onClick={() => window?.open("/jay_depani_cv.pdf", "_blank")}
              >
                Download CV
              </PrimaryButton>
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
