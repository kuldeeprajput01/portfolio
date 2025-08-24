import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Testimonials from './components/Certificates';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <CursorEffect />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Testimonials />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;