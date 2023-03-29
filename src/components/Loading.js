import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box
      component='div'
      sx={{
        backgroundColor: 'primary.light',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <CircularProgress
        size={50}
        sx={{
          color: 'text.primary',
          position: 'absolute',
          top: '50%',
          right: '48%',
        }}
      />
    </Box>
  );
};

export default Loading;
