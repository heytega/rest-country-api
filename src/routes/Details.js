import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Details = () => {
  const [singleCountry, setSingleCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  const { countryName } = useParams();

  const fetchSingleCountry = async (countryName) => {
    try {
      if (countryName.length <= 3) {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryName}`
        );

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          const [
            {
              name: { common, nativeName, official },
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

          const key = currencies[Object.keys(currencies)[0]].name;

          const newSingleCountry = {
            name: official,
            nativeName: common,
            population,
            flag: flags.png,
            region,
            subregion,
            capital,
            tld: tld ? tld[0] : [],
            currencies: currencies ? key : "",
            languages: languages ? Object.values(languages).join(", ") : [],
            borders,
          };

          const newBorders = borders ? [...borders] : [];

          console.log(key);

          setBorderCountries(newBorders);
          setSingleCountry(newSingleCountry);
        }
      } else {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          const [
            {
              name: { common, nativeName, official },
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
          const key = currencies[Object.keys(currencies)[0]].name;

          const newSingleCountry = {
            name: official,
            nativeName: common,
            population,
            flag: flags.png,
            region,
            subregion,
            capital,
            tld: tld ? tld[0] : [],
            currencies: currencies ? key : "",
            languages: languages ? Object.values(languages).join(", ") : [],
            borders,
          };

          const newBorders = borders ? [...borders] : [];

          console.log(key);

          setBorderCountries(newBorders);
          setSingleCountry(newSingleCountry);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleCountry(countryName);
  }, [countryName]);

  return (
    <>
      {/* <Paper
        sx={{
          flexGrow: 1,
          pl: 9,
          pr: 6,
          height: "90vh",
          overflow: "hidden",
        }}
        square
      > */}
      <Container maxWidth="xl">
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
                    Region: <span>{singleCountry.region}</span>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Sub Region: <span>{singleCountry.subregion}</span>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Capital: <span>{singleCountry.capital}</span>
                  </Typography>
                </Stack>

                <Stack direction="column" alignContent="center">
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Top Level Domain: <span>{singleCountry.tld}</span>
                  </Typography>

                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Currencies: <span>{singleCountry.currencies}</span>
                  </Typography>

                  <Stack
                    spacing={1}
                    sx={{ mb: 1 }}
                    direction="row"
                    justifyContent="flex-start"
                  >
                    <Typography variant="subtitle1">Languages:</Typography>
                    <Typography variant="subtitle1">
                      <span>{singleCountry.languages}</span>
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Typography
                  variant="subtitle1"
                  // sx={{ mb: 1 }}
                  alignItems="center"
                >
                  Border Countries:
                </Typography>
                <Stack direction="row" justifyContent="flex-start">
                  {borderCountries.map((country, index) => {
                    return (
                      <Link to={`/Details/${country}`}>
                        <Button key={index} variant="contained" sx={{ mr: 2 }}>
                          {country}
                        </Button>
                      </Link>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* </Paper> */}
    </>
  );
};

export default Details;
