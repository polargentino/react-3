// src/components/Skills.js
import React from 'react';
import { Box, Typography, Chip, Stack, Divider } from '@mui/material';

const Skills = () => {
  return (
    <Box p={3} bgcolor="background.paper" borderRadius={2} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom color="primary">
        Habilidades
      </Typography>
      <Divider />

      <Typography variant="h6" mt={2}>Front-end</Typography>
      <Stack direction="row" spacing={1} mt={1}>
        <Chip label="React" color="primary" />
        <Chip label="JavaScript" color="primary" />
        <Chip label="HTML" color="primary" />
        <Chip label="CSS" color="primary" />
      </Stack>

      <Typography variant="h6" mt={2}>Back-end</Typography>
      <Stack direction="row" spacing={1} mt={1}>
        <Chip label="Node.js" color="secondary" />
        <Chip label="Express" color="secondary" />
        <Chip label="MongoDB" color="secondary" />
        <Chip label="SQL" color="secondary" />
      </Stack>

      <Typography variant="h6" mt={2}>Soft Skills</Typography>
      <Stack direction="row" spacing={1} mt={1}>
        <Chip label="Problem-solving" />
        <Chip label="Communication" />
        <Chip label="Teamwork" />
        <Chip label="Adaptability" />
      </Stack>
    </Box>
  );
};

export default Skills;
