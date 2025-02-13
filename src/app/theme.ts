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
        fontSize: "2rem",
        fontWeight: 700,
        "@media (min-width:600px)": {
          fontSize: "2.5rem",
        },
        "@media (min-width:900px)": {
          fontSize: "3.5rem",
        },
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 600,
        "@media (min-width:600px)": {
          fontSize: "1.7rem",
        },
        "@media (min-width:900px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "1.2rem",
        fontWeight: 600,
        "@media (min-width:600px)": {
          fontSize: "1.5rem",
        },
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
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          },
        },
      },
    },
  });

export default getTheme;
