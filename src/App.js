import './App.css';

import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import TopButton from './components/TopButton';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <ScrollIndicator />
        <TopButton />
        <div className='container-fluid'>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </BrowserRouter>
  );
}