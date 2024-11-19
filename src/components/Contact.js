// src/components/Contact.js
import React from 'react';
import { Box, Typography, TextField, Button, Divider } from '@mui/material';

const Contact = () => {
  return (
    <Box p={3} bgcolor="background.paper" borderRadius={2} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom color="primary">
        Contacto
      </Typography>
      <Divider />
      
      <Typography variant="body1" mt={2} mb={2}>
        Gracias por tomarse el tiempo. Me comunicaré a la brevedad
      </Typography>

      <form
        action="https://formspree.io/f/manybebj" // Asegúrate de reemplazar esto con el ID correcto de tu formulario de Formspree
        method="POST"
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;






