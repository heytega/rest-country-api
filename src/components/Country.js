import React from "react";
import { Typography, Stack, Card, Box } from "@mui/material";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Card sx={{ height: "300px", width: 270, backgroundColor: "primary.main" }}>
      {/* width was previously 250 */}
      <Box
        sx={{
          height: "150px",
          width: "100%",
        }}
      >
        <img src={flag} width="100%" height="150" alt="country's flag" />
      </Box>
      <Stack sx={{ mt: 2, pl: 2 }}>
        <Typography
          variant="h6"
          sx={{ lineHeight: 1, mb: 2, color: "common.DarkBlueT" }}
        >
          {name}
        </Typography>
        <Typography sx={{ color: "DarkBlueT" }}>
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
