import React from "react";
import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.light", pt: 50, pb: 50, margin: "auto" }}
    >
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default Loading;
