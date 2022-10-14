import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <Toolbar sx={{ mt: 0.5, mb: 0.5, backgroundColor: "primary.main" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Where in the world?
            </Typography>

            <Button
              variant="contained"
              startIcon={
                darkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
              }
              onClick={toggleDarkMode}
              sx={{ pr: 3.5, pl: 3.5, pt: 1.3, pb: 1.3 }}
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </Button>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default NavBar;
