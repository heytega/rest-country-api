import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Details = () => {
  const [singleCountry, setSingleCountry] = useState([]);

  const { countryName } = useParams();

  const fetchSingleCountry = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (res.ok) {
        const data = await res.json();
        setSingleCountry(data);
        console.log(singleCountry);
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
      <Box sx={{ flexGrow: 1, pl: 6, pr: 6 }}>
        <Link to="/">
          <Button
            variant="contained"
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ mt: 4, mb: 6, pr: 3.5, pl: 3.5, pt: 1.3, pb: 1.3 }}
          >
            Back
          </Button>
        </Link>
        <Grid container spacing={2} column={12}>
          <Grid
            xs={12}
            sm={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src="https://flagcdn.com/w320/gt.png" alt="" />
          </Grid>
          <Grid
            xs={12}
            sm={8}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack>
              <Grid container spacing={2}>
                <Grid>
                  <Stack>
                    <Box>
                      <Typography variant="h3">Belgium</Typography>
                    </Box>
                    <Typography>
                      Native Name: <span>Test</span>
                    </Typography>

                    <Typography>
                      Population: <span>Test</span>
                    </Typography>
                    <Typography>
                      Region: <span>Test</span>
                    </Typography>
                    <Typography>
                      Sub Region: <span>Test</span>
                    </Typography>
                    <Typography>
                      Capital: <span>Test</span>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid>
                  <Typography>
                    Top Level Domain: <span>Test</span>
                  </Typography>

                  <Typography>
                    Currencies: <span>Test</span>
                  </Typography>

                  <Typography>
                    Language: <span>Test</span>
                  </Typography>
                </Grid>
              </Grid>
              <Stack>
                <Typography>Border Countries</Typography>
                <Button variant="contained">Test</Button>
                <Button variant="contained">Test</Button>
                <Button variant="contained">Test</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Details;
