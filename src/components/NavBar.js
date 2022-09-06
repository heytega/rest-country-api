import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    // <Paper sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ mt: 0.5, mb: 0.5, mr: 6.5, ml: 6.5 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Where in the world?
        </Typography>
        <IconButton>
          <DarkModeOutlinedIcon onClick={toggleDarkMode} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{}}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
      </Toolbar>
    </AppBar>
    // {/* </Paper> */}
  );
};

export default NavBar;
