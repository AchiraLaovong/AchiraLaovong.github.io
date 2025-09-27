import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SectionNavigator from './components/SectionNavigator';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import WorkExperience from './sections/WorkExperience';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import AllProjects from './sections/AllProjects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/globals.css';

// Homepage component with all sections
const HomePage = () => (
  <>
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
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
