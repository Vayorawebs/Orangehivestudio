import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight 
} from 'lucide-react';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  { id: '01', title: 'Ad Film Production', tag: 'High-Conversion DVCs' },
  { id: '02', title: 'Concept Development', tag: 'Strategy & Storyboarding' },
  { id: '03', title: 'Brand Films', tag: 'Long-form Narratives' },
  { id: '04', title: 'Social Content', tag: 'Vertical First Production' },
  { id: '05', title: 'Post Production', tag: 'Editing, VFX & Color' },
  { id: '06', title: 'AI Integration', tag: 'Future-Proof Content' }
];

const Services = () => {
  const listRef = useRef(null);

  useEffect(() => {
    // Ensure all rows are visible immediately as a fallback
    gsap.set('.service-row', { opacity: 1, x: 0 });
    gsap.set('.section-header > *', { opacity: 1, y: 0 });

    const ctx = gsap.context(() => {
      gsap.fromTo('.section-header > *',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.section-header',
            start: "top 90%",
            once: true,
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8
        }
      );

      gsap.fromTo('.service-row',
        { x: -60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.services-list-v3',
            start: "top 90%",
            once: true,
          },
          x: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services-v3 section-padding" ref={listRef}>
      <div className="section-header">
        <span className="label">OUR CAPABILITIES</span>
        <h2 className="section-title-big">THE <span className="highlight-text">EXPERTISE</span></h2>
        <p className="section-desc-v3">
          We bridge the gap between creative vision and technical execution, delivering premium visual assets that define brands.
        </p>
      </div>
      
      <div className="services-list-v3">
        {servicesList.map((service, index) => (
          <div key={index} className="service-row">
            <div className="row-id">{service.id}</div>
            <div className="row-content">
              <h3>{service.title}</h3>
              <span className="row-tag">{service.tag}</span>
            </div>
            <div className="row-arrow">
              <ArrowUpRight size={32} />
            </div>
            <div className="row-hover-bg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
