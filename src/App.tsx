import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

const App: React.FC = () => {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;