import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Countries from "./components/Countries";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Details from "./routes/Details";

import { ClassNames } from "@emotion/react";
const darkmode = createTheme({
  palette: {
    mode: "dark",
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
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1.1rem",
    },
  },
});

const lightmode = createTheme({
  palette: {
    mode: "light",
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
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1.1rem",
    },
  },
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    // <Paper>
    <ThemeProvider theme={darkMode ? darkmode : lightmode}>
      <Router>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="details/:countryName">
            <Details />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    /* </Paper> */
  );
};

export default App;
