import React from 'react';
import Navigation from './components/Navigation';
import SectionNavigator from './components/SectionNavigator';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import WorkExperience from './sections/WorkExperience';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <SectionNavigator />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="experience">
            <WorkExperience />
          </section>

          <section id="certificates">
            <Certificates />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
