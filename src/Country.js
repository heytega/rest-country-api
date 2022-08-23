import React from "react";
import { Typography, Stack, Card, Box } from "@mui/material";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Card sx={{ height: 290, width: 250 }}>
      <Box sx={{ height: 150 }}>
        <img src={flag} alt="country's flag" sx={{ height: "10px" }} />
      </Box>
      <Stack sx={{ mt: 2 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h8">Population: {population}</Typography>
        <Typography>Region: {region}</Typography>
        <Typography>Capital: {capital}</Typography>
      </Stack>
    </Card>
  );
};

export default Country;
