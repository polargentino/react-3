// src/App.js
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Switch from './components/Switch';
import ImageGallery from './components/ImageGallery'; // Importa la galería de imágenes
//import VideoGrid from './components/VideoGrid';


// Importa aquí los otros componentes

const App = () => {
  return (
    <div>
      <Header />
      <Switch /> 
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Contact /> 
       {/* Contenedor para la galería de imágenes y la cuadrícula de videos */}
       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <ImageGallery />
        {/*<VideoGrid />*/}
      </div>
       {/* Añade aquí los otros componentes, como Profile, Experience, Skills, etc. */}
      
    </div>
  );
};

export default App;

