import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Profile = () => {
  return (
    <Box p={3} bgcolor="background.paper">
      <Typography variant="h4" gutterBottom>
        Perfil
      </Typography>
      <Divider />
      <Typography variant="body1" mt={2}>
         "Mi experiencia como instructor me ha permitido desarrollar habilidades pedagógicas que me permiten transmitir conocimientos de manera efectiva. Combinado con mi pasión por la tecnología, me siento preparado para guiar a otros en su camino hacia el desarrollo profesional."
      </Typography>
    </Box>
  );
};

export default Profile;