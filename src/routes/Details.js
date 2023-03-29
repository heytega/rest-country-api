import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';
import { Box, Typography, Button, Stack, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Details = ({ loading, setLoading }) => {
  const [singleCountry, setSingleCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  const { countryName } = useParams();

  const fetchSingleCountry = async (countryName) => {
    try {
      setLoading(true);
      if (countryName.length <= 3) {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryName}`
        );

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          const [
            {
              name: { common, official },
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
            currencies: currencies ? key : '',
            languages: languages ? Object.values(languages).join(', ') : [],
            borders,
          };

          const newBorders = borders ? [...borders] : [];

          console.log(key);

          setBorderCountries(newBorders);
          setSingleCountry(newSingleCountry);
          setLoading(false);
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
              name: { common, official },
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
            currencies: currencies ? key : '',
            languages: languages ? Object.values(languages).join(', ') : [],
            borders,
          };

          const newBorders = borders ? [...borders] : [];

          console.log(key);

          setBorderCountries(newBorders);
          setSingleCountry(newSingleCountry);
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleCountry(countryName);
  }, [countryName]);

  if (loading) return <Loading />;

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          height: '100%',
          mt: '72px',
          // pb: "2",
          // overflow: "hidden",
        }}
      >
        <Container
          maxWidth='xl'
          sx={{ backgroundColor: 'primary.light', height: '100%', pd: '5rem' }}
        >
          <Link to='/'>
            <Button
              variant='contained'
              startIcon={<KeyboardBackspaceIcon />}
              sx={{ mt: 4, mb: 3.5, pr: 3.5, pl: 3.5, pt: 1.3, pb: 1.3 }}
            >
              Back
            </Button>
          </Link>

          {/* xs, extra-small: 0px
              sm, small: 600px
              md, medium: 900px
              lg, large: 1200px
              xl, extra-large: 1400px
              xxl, extra-extra-large: 1536px */}

          <Grid
            component={motion.div}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, stiffness: 200 }}
            container
            columnSpacing={{ xs: 14 }}
            column={12}
            disableEqualOverflow
            height={{ lg: 450 }}
            alignItems='center'
            sx={{
              color: 'text.primary',
              pt: 5,
              pb: 5,
              // mb: 10,
              // height: 450,
              backgroundColor: 'primary.light',
            }}
          >
            <Grid
              xxs={12}
              // sm={12}
              md={5.5}
              lg={5}
              xl={5}
              display='flex'
              sx={{ mb: 3 }}
            >
              <Box
                component='img'
                sx={{ height: 355, objectFit: 'cover' }}
                alt={`${singleCountry.name}'s flag`}
                src={singleCountry.flag}
              />
            </Grid>
            <Grid
              xxs={12}
              // sm={12}
              md={5.5}
              lg={6}
              xl={6}
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{ backgroundColor: 'primary.light' }}
            >
              <Stack
                direction='column'
                justifyContent='space-between'
                sx={{
                  height: '70%',
                  width: '100%',
                  backgroundColor: 'primary.light',
                }}
              >
                <Box>
                  <Typography variant='h4' sx={{ mb: 2 }}>
                    {singleCountry.name}
                  </Typography>
                </Box>
                <Stack
                  direction={{ xxs: 'column', sm: 'row' }}
                  justifyContent='space-between'
                  spacing={{ xxs: 2 }}
                >
                  <Stack direction='column'>
                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Native Name: <span>{singleCountry.nativeName}</span>
                    </Typography>

                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Population: <span>{singleCountry.population}</span>
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Region: <span>{singleCountry.region}</span>
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Sub Region: <span>{singleCountry.subregion}</span>
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Capital: <span>{singleCountry.capital}</span>
                    </Typography>
                  </Stack>

                  <Stack direction='column' alignContent='center'>
                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Top Level Domain: <span>{singleCountry.tld}</span>
                    </Typography>

                    <Typography variant='subtitle1' sx={{ mb: 1 }}>
                      Currencies: <span>{singleCountry.currencies}</span>
                    </Typography>

                    <Stack
                      spacing={1}
                      sx={{ mb: 1 }}
                      direction='row'
                      justifyContent='flex-start'
                    >
                      <Typography variant='subtitle1'>Languages:</Typography>
                      <Typography variant='subtitle1'>
                        <span>{singleCountry.languages}</span>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  spacing={2}
                  direction={{ xxs: 'column', lg: 'row' }}
                  justifyContent='flex-start'
                  alignItems={{ xxs: 'flex-start', lg: 'center' }}
                  sx={{ mt: 1 }}
                >
                  <Typography
                    variant='subtitle1'
                    // sx={{ mb: 1 }}
                    alignItems='center'
                  >
                    Border Countries:
                  </Typography>
                  <Stack
                    direction='row'
                    justifyContent='flex-start'
                    flexWrap='wrap'
                  >
                    {borderCountries.map((country, index) => {
                      return (
                        <Link to={`/Details/${country}`}>
                          <Button
                            key={index}
                            variant='contained'
                            sx={{ mr: 2, mb: 1 }}
                          >
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
      </Box>
    </>
  );
};

export default Details;
