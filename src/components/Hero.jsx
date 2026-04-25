import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';
import hiveVisual from '../assets/hero-bg-v2.png';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', { 
        y: 200, 
        skewY: 10, 
        duration: 1.5, 
        stagger: 0.1, 
        ease: "power4.out" 
      });
      gsap.from('.hero-visual', { 
        opacity: 0, 
        scale: 1.5, 
        duration: 2, 
        ease: "power2.out" 
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-v2" ref={heroRef}>
      <div className="hero-visual">
        <img src={hiveVisual} alt="Creative Hive" />
      </div>
      
      <div className="hero-title-container">
        <div className="title-row">
          <span className="hero-word">ORANGE</span>
        </div>
        <div className="title-row">
          <span className="hero-word orange-text">HIVE</span>
        </div>
        <div className="title-row">
          <span className="hero-word">STUDIO</span>
        </div>
      </div>

      <div className="hero-bottom-bar">
        <div className="hero-info">
          <p>EST. 2018 / MUMBAI</p>
          <p>AWARD WINNING PRODUCTION</p>
        </div>
        <a href="#contact" className="btn-big">START REACTION</a>
      </div>
    </section>
  );
};

export default Hero;
