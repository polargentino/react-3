// src/components/Education.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Education = () => {
  return (
    <Box p={3} bgcolor="background.paper" borderRadius={2} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom color="primary">
        Educación
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText
            primary="Instructor de Formación Profesional - 1ra cohorte"
            secondary="Escuela 637 Domingo Cullen | 2011 - 2025"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            primary="Full Stack Development Bootcamp - Robótica"
            secondary="FreeCodeCamp - Google | 2022 - 2023"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            primary=" Linux - Python - AI - Cibersecurity - QA automation - React"
            secondary=" Autodidacta - HTB - Dockerlab - Youtube - Xacademy -AI | 2024"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
