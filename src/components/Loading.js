import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    // <Box
    //   sx={{ backgroundColor: "primary.light", pt: 50, pb: 50, margin: "auto" }}
    // >
    //   <Typography variant="h6">Loading...</Typography>
    // </Box>
    <Box
      sx={{ display: "flex", zIndex: "3", backgroundColor: "primary.light" }}
    >
      <CircularProgress sx={{ color: "text.primary" }} />
    </Box>
  );
};

export default Loading;
