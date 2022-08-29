import React from "react";
// import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Country from "./Country";
import Loading from "./Loading";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Box sx={{ flexGrow: 1, pl: 6, pr: 6, mt: 6 }}>
          <Grid container rowSpacing={{ xs: 3, md: 10 }} columns={12}>
            {/* xs, extra-small: 0px
              sm, small: 600px
              md, medium: 900px
              lg, large: 1200px
              xl, extra-large: 1536px */}
            {countries.map((country, index) => (
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={4}
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
                    flag={country.flags.png}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
};

export default Countries;
