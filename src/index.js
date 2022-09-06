import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import Details from "./routes/Details";
import NavBar from "./components/NavBar";
import { AppProvider } from "./Context";

// const theme = createTheme({
//   typography: {
//     fontFamily: "Nunito Sans",
//     fontWeightMedium: 600,
//     fontWeightBold: 800,
//     h4: {
//       fontFamily: "Nunito Sans",
//       fontWeight: 800,
//     },
//     h6: {
//       fontFamily: "Nunito Sans",
//       fontWeight: 700,
//     },
//     subtitle1: {
//       fontWeight: 600,
//       fontSize: "1.1rem",
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </AppProvider>
  </React.StrictMode>
);
