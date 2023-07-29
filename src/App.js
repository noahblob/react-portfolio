import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import TopButton from './components/TopButton';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', mouseMove);

    return () => { window.removeEventListener('mousemove', mouseMove); }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    }
  }

  return (
    <BrowserRouter>
      <main>
        <ScrollIndicator />
        <TopButton />
        <div className='container-fluid'>
          <motion.div
            className='cursor'
            variants={variants}
            animate='default'
          />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </BrowserRouter>
  );
}