import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Snapshots from './components/Snapshots';
import Directors from './components/Directors';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';
import './index.css';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <SmoothScroll>
      <div className="app">
        <div 
          className="custom-cursor" 
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
        <Navbar />
        <main>
          <Hero />
          <Clients />
          <About />
          <Services />
          <Projects />
          <Snapshots />
          <Directors />
        </main>
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;
  
