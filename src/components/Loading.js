import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", zIndex: "3", backgroundColor: "primary.light" }}
    >
      <CircularProgress sx={{ color: "text.primary" }} />
    </Box>
  );
};

export default Loading;
