import React from "react";
// import { motion } from "framer-motion";
import { Typography, Stack, Card } from "@mui/material";
import "./Country.css";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Card sx={{ height: "350px", width: 300, backgroundColor: "primary.main" }}>
      {/* width was previously 270 */}
      {/* <Box
        sx={{
          minHeight: "3rem",
          maxHeight: "13rem",
          width: 300,
        }}
      > */}
      <img src={flag} alt="country's flag" className="image" />
      {/* </Box> */}
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
