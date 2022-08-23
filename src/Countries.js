import React from "react";
// import { styled, alpha } from "@mui/material/styles";
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
          <Grid
            container
            // spacing={{ xs: 3, md: 8 }}
            rowSpacing={{ xs: 3, md: 10 }}
            // columns={{ xs: 2, sm: 4, md: 12 }}
            columns={12}
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
                alignItems="center"
                just
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Country
                  key={index}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flags.png}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
};

export default Countries;
