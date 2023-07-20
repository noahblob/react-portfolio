import './App.css';

import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';

export default function App() {
  return (
    <main>
      <ScrollIndicator />
      <div className='container'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}