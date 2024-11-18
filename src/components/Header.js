// src/components/Header.js
import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';

const Header = () => {
  return (
    <Box textAlign="center" p={3} bgcolor="primary.main" color="white">
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Avatar
          alt="Profile Picture"
          src="/2024-11-12-095152.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Box>
          <Typography variant="h2">Pablo Monsalvo</Typography>
          <Typography variant="h5">Full Stack Developer</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;

