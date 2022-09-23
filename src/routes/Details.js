import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Details = () => {
  const [singleCountry, setSingleCountry] = useState();

  const { countryName } = useParams();

  const fetchSingleCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (res.ok) {
        const data = await res.json();
     const   [https://github.com/heytega/rest-country-api/
          {
            name,
            population,
            region,
            subregion,
            capital,
            tld,
            flags,
            currencies,
            languages,
            borders,
          },
        ] = data;


        const newSingleCountry = {
          name: name.official,
          nativeName: name.common,
          population,
          flag: flags.svg,
          region,
          subregion,
          capital,
          tld: tld[0],
          currencies,
          languages,
          borders,
        };
        setSingleCountry(newSingleCountry)
        // console.log(newSingleCountry);
       
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleCountry();
  }, []);

  // const {
  //   name,
  //   nativeName,
  //   population,
  //   flag,
  //   region,
  //   subregion,
  //   languages,
  //   capital,
  //   tld,
  //   currencies,
  //   borders,
  // } = singleCountry;
  return (
    <>
      <Paper
        sx={{
          flexGrow: 1,
          pl: 9,
          pr: 6,
          height: "90vh",
          overflow: "hidden",
        }}
        square
      >
        <Link to="/">
          <Button
            variant="contained"
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ mt: 4, mb: 6, pr: 3.5, pl: 3.5, pt: 1.3, pb: 1.3 }}
          >
            Back
          </Button>
        </Link>
        <Grid container columnSpacing={{ xs: 14 }} column={12}>
          <Grid
            xs={12}
            sm={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{}}
          >
            <img
              src={singleCountry.flag}
              alt="country's flag"
              sx={{ height: "500px" }}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ height: "290px", width: "100%" }}
            >
              <Box>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {singleCountry.name}
                </Typography>
              </Box>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="column">
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Native Name: <span>{singleCountry.nativeName}</span>
                  </Typography>

                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Population: <span>{singleCountry.population}</span>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Region:
                    <span>{singleCountry.region}</span>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Sub Region:
                    <span>{singleCountry.subregion}</span>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Capital: <span>{singleCountry.capital}</span>
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  alignContent="center"
                  // justifyContent="center"
                >
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Top Level Domain: <span>{singleCountry.tld}</span>
                  </Typography>

                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Currencies: <span>Euro</span>
                  </Typography>

                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Language: <span>Dutch, French, German</span>
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 2.5 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  Border Countries
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  justifySelf="flex-start"
                  sx={{ width: "60%" }}
                >
                  {/* {borders.map((country, index) => {
                    return (
                      <Button key={index} variant="contained" sx={{ mr: 2 }}>
                        {country}
                      </Button>
                    );
                  })} */}
                  <Button variant="contained" sx={{ mr: 2 }}>
                    France
                  </Button>
                  <Button variant="contained" sx={{ mr: 2 }}>
                    Germany
                  </Button>
                  <Button variant="contained" sx={{ mr: 2 }}>
                    Netherland
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Details;
