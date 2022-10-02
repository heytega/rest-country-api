import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Countries from "./components/Countries";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Details from "./routes/Details";

import { ClassNames } from "@emotion/react";
import { dark } from "@mui/material/styles/createPalette";
const darkmode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(209, 23%, 22%)", //element
      light: "hsl(207, 26%, 17%)", //background
      dark: "hsl(200, 15%, 8%)", //text
      contrastText: "#111517",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h4: {
      fontFamily: "Nunito Sans",
      fontWeight: 800,
    },
    h6: {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1.1rem",
    },
  },

  breakpoints: {
    values: {
      xxs: 0,
      xs: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
      xxl: 1536,
    },
  },
});

const lightmode = createTheme({
  palette: {
    mode: "light",
    // common: {
    //   LightGray: "#FAFAFA",
    //   DarkGray: "#858585",
    //   DarkBlueT: "#111517",
    // },
    primary: {
      main: "#fff", //element
      light: "hsl(0, 0%, 98%)", //background
      dark: "hsl(200, 15%, 8%)", //text
      input: "hsl(0, 0%, 52%)",
      contrastText: "hsl(0, 0%, 52%)",
    },
  },

  breakpoints: {
    values: {
      xxs: 0,
      xs: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
      xxl: 1536,
    },
  },

  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // border: "none",
          boxShadow: "none",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // border: "none",
          backgroundColor: "hsl(0, 0%, 98%)",
        },
      },
    },
  },

  typography: {
    fontFamily: "Nunito Sans",
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h4: {
      fontFamily: "Nunito Sans",
      fontWeight: 800,
    },
    h6: {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      "@media (max-width:400px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width: 280px)": {
        fontSize: "0.7rem",
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1.1rem",
    },
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: "1.1rem",
  },
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkmode : lightmode}>
      <BrowserRouter>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Details/:countryName" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
