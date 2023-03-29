import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: 'primary.light',
        alignItems: 'center',
      }}
    >
      <CircularProgress
        size={60}
        sx={{
          color: 'text.primary',
        }}
      />
    </Box>
  );
};

export default Loading;
