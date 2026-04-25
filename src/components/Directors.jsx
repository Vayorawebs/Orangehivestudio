import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Directors.css';

const directorsList = [
  { name: 'Raju Pandit', role: 'Director', image: 'https://static.wixstatic.com/media/5cb508_82bf1b4b1aad4f0784b20f55997483de~mv2.png' },
  { name: 'Gabriel Ghoderao', role: 'Director', image: 'https://static.wixstatic.com/media/5cb508_702eae10a2974dcc8c3cbfa1ab41bab6~mv2.png' },
  { name: 'Jayant Sarin', role: 'Creative Director', image: 'https://static.wixstatic.com/media/5cb508_5e8581c6d5714560b8463c8f6c38a0ac~mv2.png' },
  { name: 'Namash Bhardwaj', role: 'Director', image: 'https://static.wixstatic.com/media/5cb508_fe62ba0767354cd4b40673b23b3ae309~mv2.png' }
];

const Directors = () => {
  const directorsRef = useRef(null);

  useEffect(() => {
    gsap.set('.director-card', { opacity: 1, y: 0 });
    const ctx = gsap.context(() => {
      gsap.fromTo('.director-card',
        { y: 100, opacity: 0 },
        {
          scrollTrigger: { trigger: directorsRef.current, start: "top 90%", once: true },
          y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: "power3.out"
        }
      );
    }, directorsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="directors" className="directors" ref={directorsRef}>
      <h2 className="section-title">VISIONARY <span className="orange-text">LEADERSHIP</span></h2>
      <p className="section-subtitle">The creative force behind our most ambitious productions.</p>
      
      <div className="directors-grid">
        {directorsList.map((director, index) => (
          <div key={index} className="director-card">
            <div className="director-image">
              <img src={director.image} alt={director.name} />
              <div className="social-links">
                <a href="#">IMDB</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
            <div className="director-info">
              <h3>{director.name}</h3>
              <span>{director.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Directors;
