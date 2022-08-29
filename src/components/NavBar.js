import React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" mb={2}>
        <Toolbar sx={{ m: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Where in the world?
          </Typography>
          <IconButton>
            <DarkModeOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Dark Mode
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
