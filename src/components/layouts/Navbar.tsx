"use client";

import { ChevronUp } from "lucide-react";
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
  useScrollTrigger,
  Fab,
  alpha,
} from "@mui/material";
import { useThemeContext } from "../ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import BodyContainer from "./BodyContainer";
// import DownloadCVButton from "../general/DownloadCV";
import { NAV_LINKS } from "@/lib/data";
import { NavLinkTypes } from "@/lib/types";
import ScrollTop from "../general/ScrollTop";

interface Props {
  window?: () => Window;
}

export default function Navbar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleTheme, mode } = useThemeContext();

  // Detect scroll position
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20, // Start effect after 20px scroll
    target: props.window ? props.window() : undefined,
  });

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: trigger
            ? theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.8)"
              : alpha(theme.palette.background.default, 0.6) // Light mode: Semi-transparent white
            : "transparent", // Fully transparent when at the top
          backdropFilter: "blur(10px)", // Blurred background effect
          color: "text.primary",
          transition: "background-color 0.3s ease",
          boxShadow: "none",
        }}
      >
        <BodyContainer>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              width: "100%",
              padding: "0 !important",
            }}
          >
            {/* Logo */}
            <Typography
              variant="h4"
              sx={{ fontWeight: 600 }}
              component={"a"}
              href="/"
            >
              {`<JD />`}
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ display: "flex", gap: 4 }}>
                  {NAV_LINKS.map(({ label, href }: NavLinkTypes) => (
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
                    {mode === "light" ? <Moon /> : <Sun />}
                  </IconButton>
                  {/* <DownloadCVButton /> */}
                </Box>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton onClick={toggleDrawer}>
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </BodyContainer>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" onClick={toggleDrawer}>
                  <X />
                </IconButton>
              }
            >
              <ListItemText
                primary="<JD />"
                slotProps={{
                  primary: {
                    variant: "h4",
                    fontWeight: 600,
                  },
                }}
              />
            </ListItem>
            <Divider />
            {NAV_LINKS.map(({ label, href }: NavLinkTypes) => (
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
                {mode === "light" ? <Moon /> : <Sun />}
              </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding>
              <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                <DownloadCVButton />
              </Box>
            </ListItem> */}
          </List>
        </Drawer>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <ChevronUp />
        </Fab>
      </ScrollTop>
    </>
  );
}
