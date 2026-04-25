import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Snapshots.css';
import snap1 from '../assets/snapshot-1.png';
import snap2 from '../assets/snapshot-2.png';

const Snapshots = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.snap-large', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      gsap.from('.snap-small', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="snapshots-v3 section-padding" ref={containerRef}>
      <div className="snapshots-header">
        <h2 className="title-medium">PROD.<span className="orange-text">LOG</span></h2>
        <p className="subtitle-small">BEYOND THE LENS / PRODUCTION MOMENTS</p>
      </div>
      
      <div className="snapshots-grid">
        <div className="snap-large">
          <img src={snap1} alt="Director on set" />
          <div className="snap-info">
            <span>BEHIND THE SCENES</span>
            <h3>MASTERING THE FRAME</h3>
          </div>
        </div>
        <div className="snap-small">
          <img src={snap2} alt="Product shoot" />
          <div className="snap-info">
            <span>EQUIPMENT</span>
            <h3>MACRO PRECISION</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snapshots;
