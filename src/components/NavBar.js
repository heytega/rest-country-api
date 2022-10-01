import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Paper,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Container
        maxWidth="xl"
        // sx={{ display: "flex", flexDirection: "row", mt: 2, mb: 2 }}
        // sx={{
        //   backgroundColor: "primary.main",
        // }}
      >
        <Toolbar sx={{ mt: 0.5, mb: 0.5 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <DarkModeOutlinedIcon
            onClick={toggleDarkMode}
            sx={{ color: darkMode ? "white" : "DarkBlueT", cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            component="div"
            onClick={toggleDarkMode}
            sx={{ color: darkMode ? "white" : "DarkBlueT", cursor: "pointer" }}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
