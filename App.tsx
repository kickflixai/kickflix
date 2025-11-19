
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Manifesto } from './components/Manifesto';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        <Process />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
