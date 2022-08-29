import React from "react";
import { Typography, Stack, Card, Box } from "@mui/material";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Card sx={{ height: 290, width: 250 }}>
      <Box sx={{ height: 150 }}>
        <img src={flag} alt="country's flag" sx={{ height: "10px" }} />
      </Box>
      <Stack sx={{ mt: 2 }}>
        <Typography variant="h6">
          <span>{name}</span>
        </Typography>
        <Typography variant="h8">
          Population: <span>{population}</span>
        </Typography>
        <Typography>
          Region: <span>{region}</span>
        </Typography>
        <Typography>
          Capital: <span>{capital}</span>
        </Typography>
      </Stack>
    </Card>
  );
};

export default Country;
