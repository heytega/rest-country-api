import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Details from "./routes/Details";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="details" element={<Details />} /> */}
        <Route path="details/:countryName" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
