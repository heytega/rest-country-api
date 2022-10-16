import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "primary.light",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          color: "text.primary",
        }}
      />
    </Box>
  );
};

export default Loading;
