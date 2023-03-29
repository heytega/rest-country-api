import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Details from './routes/Details';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

const darkmode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(209, 23%, 22%)', //element
      light: 'hsl(207, 26%, 17%)', //background
      // dark: "hsl(200, 15%, 8%)", //text
      // contrastText: "#111517",
    },

    text: {
      primary: '#fff',
    },
    background: {
      default: 'hsl(207, 26%, 17%)',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans',
    fontWeightMedium: 600,
    fontWeightBold: 800,
    // color: "#111517",
    h4: {
      fontFamily: 'Nunito Sans',
      fontWeight: 800,
    },
    h6: {
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
      '@media (max-width:450px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width: 280px)': {
        fontSize: '0.7rem',
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: '1.1rem',
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
    mode: 'light',
    common: {
      black: 'hsl(200, 15%, 8%)',
      white: '#fff',
      // DarkBlueT: "#111517",
    },

    primary: {
      main: '#fff', //element
      light: 'hsl(0, 0%, 98%)', //background
      // dark: "hsl(200, 15%, 8%)", //text
      // input: "hsl(0, 0%, 52%)",
      // contrastText: "hsl(0, 0%, 52%)",
    },

    text: {
      primary: 'hsl(200, 15%, 8%)',
    },

    background: {
      default: 'hsl(0, 0%, 98%)',
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
          boxShadow: 'none',
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // border: "none",
          backgroundColor: 'hsl(0, 0%, 98%)',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Nunito Sans',
    fontWeightMedium: 600,
    fontWeightBold: 800,
    // color: "#111517",
    h4: {
      fontFamily: 'Nunito Sans',
      fontWeight: 800,
    },
    h6: {
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
      '@media (max-width:450px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width: 280px)': {
        fontSize: '0.8rem',
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
});

const App = () => {
  const [loading, setLoading] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkmode : lightmode}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route
            exact
            path='/'
            element={<Home loading={loading} setLoading={setLoading} />}
          />
          <Route
            path='/Details/:countryName'
            element={<Details loading={loading} setLoading={setLoading} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
