// src/App.js
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      {/* Encabezado */}
      <Header />
      
      {/* Secciones principales */}
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;

