import React from "react";
// import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Country from "./Country";
import Loading from "./Loading";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Paper sx={{ flexGrow: 1, mt: 6 }} elevation={0}>
          <Grid
            container
            rowSpacing={{ xs: 3, md: 3 }}
            columnSpacing={{ md: 0 }}
            columns={12}
          >
            {countries.map((country, index) => (
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={3}
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
        </Paper>
      </>
    );
  }
};

export default Countries;
