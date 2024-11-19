
import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';

const Header = () => {
  return (
    <Box textAlign="center" p={3} bgcolor="primary.main" color="white">
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Avatar
          alt="Profile Picture"
          src="/20241119_134303.jpg" // Ruta ajustada
          sx={{ width: 100, height: 100 }}
        />
        <Box>
          <Typography variant="h2">Pablo Monsalvo</Typography>
          <Typography variant="h5">C.V-1</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;


