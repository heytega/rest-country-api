import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Country from './Country';
import Grid from '@mui/material/Unstable_Grid2';

const Countries = ({ countries }) => {
  return (
    <>
      <Grid
        container
        rowSpacing={{ xxs: 5 }}
        columnSpacing={{ xxs: 8 }}
        columns={12}
        disableEqualOverflow
        sx={{ backgroundColor: 'primary.light' }}
      >
        {/* xs, extra-small: 0px
              sm, small: 600px
              md, medium: 900px
              lg, large: 1200px
              xl, extra-large: 1536px */}
        {countries.map((country, index) => (
          <Grid
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              // delay: 0.,
              ease: [0, 0.71, 0.2, 1.01],
              duration: 0.2,
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
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
