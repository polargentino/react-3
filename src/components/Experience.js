// src/components/Experience.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience = () => {
  return (
    <Box p={3} bgcolor="background.paper" borderRadius={2} boxShadow={3}>
      <Typography variant="h4" gutterBottom color="primary">
        Experiencia
      </Typography>
      <Divider />
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Instructor de  F.P</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          "Como instructor en formación profesional, he combinado mi experiencia en desarrollo web (React, Robótica, Cibersecurity, AI, QA automation ) con mis conocimientos en metalmecánica, electrónica y electricidad para crear programas de capacitación personalizados y efectivos. A través de talleres prácticos y proyectos colaborativos, he empoderado a mis estudiantes para que adquieran las habilidades necesarias para enfrentar los desafíos del mercado laboral. Mi pasión por la enseñanza y mi compromiso con el aprendizaje continuo me impulsan a buscar constantemente nuevas oportunidades para crecer y desarrollar mi carrera."
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/*<Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Frontend Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          "Lideré el rediseño del sitio web principal de la escuela  con tecnologías frontend de última generación como React y Material-UI. Esto nos permitió acelerar la carga de las páginas en un 30% y aumentar la retención de usuarios en un 15%."
          </Typography>
        </AccordionDetails>
      </Accordion>*/}

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Multitarea-polifacético </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          "Multitarea polifacético: Nacido en los 80, experimenté de primera mano las dificultades económicas que marcaron a una generación. La imposibilidad de acceder a la educación superior me impulsó a buscar alternativas creativas. A través de cursos online gratuitos y autoaprendizaje, adquirí conocimientos en programación y desarrollo web. Hoy, gracias a la tecnología y a mi perseverancia, he logrado convertir mi pasión por la tecnología en una carrera exitosa."
          </Typography>
        </AccordionDetails>
      </Accordion>






      <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="h6">Frontend Developer</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography variant="body2">
      "Lideré el rediseño del sitio web principal de la  
      <a 
        href="https://polargentino.github.io/escuela637-1/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}
      >
        escuela
      </a> 
      con tecnologías frontend de última generación como React y Material-UI. Esto nos permitió acelerar la carga de las páginas en un 30% y aumentar la retención de usuarios en un 15%."
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      <strong>Cursos relacionados:</strong>
      <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
        <li>
          <a 
            href="https://polargentino.github.io/curso.github.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Curso de HTML -CSS
          </a>
        </li>
        <li>
          <a 
            href="https://polargentino.github.io/fotovoltaica/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Curso de Bootstrap y Jquery
          </a>
        </li>
        <li>
          <a 
            href="https://polargentino.github.io/bobinado-1/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Curso de Bootstrap made
          </a>
        </li>
        <li>
          <a 
            href="https://polargentino.github.io/react-2/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Curso de React y mui
          </a>
        </li>
      </ul>
    </Typography>
  </AccordionDetails>
</Accordion>

    </Box>
  );
};

export default Experience;
