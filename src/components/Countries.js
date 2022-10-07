import React from "react";
// import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Country from "./Country";
import Loading from "./Loading";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Countries = ({ countries }) => {
  return (
    <>
      <Grid
        container
        rowSpacing={{ xxs: 5 }}
        columnSpacing={{ xxs: 12 }}
        columns={12}
        disableEqualOverflow
        sx={{ backgroundColor: "primary.light" }}
      >
        {/* xs, extra-small: 0px
              sm, small: 600px
              md, medium: 900px
              lg, large: 1200px
              xl, extra-large: 1536px */}
        {countries.map((country, index) => (
          <Grid
            display="flex"
            justifyContent="center"
            // alignSelf="center"
            // justifyContent="space-between"
            alignItems="center"
            xxs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
          >
            <Link to={`details/${country.name.common}`}>
              <Country
                key={index}
                country={country}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Countries;
