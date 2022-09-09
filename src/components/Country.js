import React from "react";
import { Typography, Stack, Card, Box } from "@mui/material";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Card sx={{ height: "300px", width: 250 }}>
      <Box
        sx={{
          height: "150px",
          width: "100%",
        }}
      >
        <img src={flag} width="250" height="150" alt="country's flag" />
      </Box>
      <Stack sx={{ mt: 2, pl: 2 }}>
        <Typography variant="h6">
          <span>{name}</span>
        </Typography>
        <Typography>
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
