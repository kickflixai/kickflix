
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Manifesto } from './components/Manifesto';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';

// Main Home Page Component
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Manifesto />
      <Process />
      <Work />
      <About />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-brand-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
