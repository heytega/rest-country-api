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
          // sx={{ display: "flex", flexDirection: "row", mt: 2, mb: 2 }}
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <Toolbar sx={{ mt: 0.5, mb: 0.5, backgroundColor: "primary.main" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Where in the world?
            </Typography>

            <Button
              variant="outlined"
              startIcon={<DarkModeOutlinedIcon />}
              onClick={toggleDarkMode}
              sx={{
                // mt: 4,
                // mb: 6,
                // pr: 3.5,
                // pl: 3.5,
                // pt: 1.3,
                // pb: 1.3,
                color: darkMode ? "white" : "#0000",
                borderColor: "#fff",
              }}
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </Button>
            {/* <DarkModeOutlinedIcon
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
          </Typography> */}
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default NavBar;
