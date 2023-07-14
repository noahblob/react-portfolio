import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <main>
      <div className='container'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}