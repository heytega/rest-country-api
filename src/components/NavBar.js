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
          // disableEqualOverflow
        >
          <Toolbar sx={{ mt: 0.5, mb: 0.5, backgroundColor: "primary.main" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Where in the world?
            </Typography>
            <Button
              variant="outlined"
              startIcon={
                darkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
              }
              onClick={toggleDarkMode}
              sx={{
                color: "text.primary",
                border: "1px solid",
                backgroundColor: "primary.light",

                pr: 1,
                pl: 1,
                pt: 1.3,
                pb: 1.3,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "text.primary", fontSize: "1rem" }}
              >
                {darkMode ? "Dark Mode" : "Light Mode"}
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default NavBar;
