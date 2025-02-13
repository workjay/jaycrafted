"use client";

import { ChevronUp } from "lucide-react";
import { cloneElement, useState } from "react";
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
} from "@mui/material";
import { useThemeContext } from "../ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import BodyContainer from "./BodyContainer";
import DownloadCVButton from "../general/DownloadCV";
import { NAV_LINKS } from "@/lib/data";
import { NavLinkTypes } from "@/lib/types";
import ScrollTop from "../general/ScrollTop";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function Navbar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleTheme, mode } = useThemeContext();

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "background.paper",
            color: "text.primary",
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
                {`<JR />`}
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
                    <DownloadCVButton />
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
              <ListItem disablePadding>
                <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                  <DownloadCVButton />
                </Box>
              </ListItem>
            </List>
          </Drawer>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <ChevronUp />
        </Fab>
      </ScrollTop>
    </>
  );
}
