import { createTheme, PaletteOptions } from "@mui/material/styles";

// Extend the Palette interface to include custom variables
declare module "@mui/material/styles" {
  interface Palette {
    secondaryBackground: string;
  }
  interface PaletteOptions {
    secondaryBackground?: string;
  }
}

const getTheme = (mode: "light" | "dark") =>
  createTheme({
    typography: {
      fontFamily: "'Baloo Bhai 2', sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        color: mode === "light" ? "#4B5563" : "#D1D5DB",
      },
      body2: {
        fontWeight: 400,
        color: mode === "light" ? "#4B5563" : "#D1D5DB",
      },
    },
    palette: {
      mode,
      primary: {
        main: "#00ADB5",
      },
      secondary: {
        main: "#393E46",
      },
      background: {
        default: mode === "light" ? "#fff" : "#222831",
        paper: mode === "light" ? "#FFFFFF" : "#393E46",
      },
      text: {
        primary: mode === "light" ? "#111827" : "#EEEEEE",
        secondary: mode === "light" ? "#4B5563" : "#D1D5DB",
      },
      secondaryBackground: mode === "light" ? "#EEEEEE" : "#393E46",
    } as PaletteOptions,
  });

export default getTheme;
