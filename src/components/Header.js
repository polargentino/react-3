// src/components/Header.js
import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import profileImage from '../assets/20241119_134249.jpg'; // Importamos la imagen

const Header = () => {
  return (
    <Box textAlign="center" p={3} sx={{ ...styles.header }}>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Avatar
          alt="Profile Picture"
          src={profileImage} // Usamos la imagen importada
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

const styles = {
  header: {
    bgcolor: 'primary.main',
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

export default Header;




