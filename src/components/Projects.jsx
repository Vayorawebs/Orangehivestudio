import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Projects.css';

const projectList = [
  { title: 'Harpic DVC', image: 'https://static.wixstatic.com/media/5cb508_2cd6d5ccd77e49ccaee19cdc58bfc7d8~mv2.png' },
  { title: 'Nivea - Moisturizers', image: 'https://static.wixstatic.com/media/5cb508_6ba34a3cd80940c0acaf352fb40da59b~mv2.png' },
  { title: 'Yaksha Whisky', image: 'https://static.wixstatic.com/media/5cb508_795bdc3b25924eebb4edaad2c9876a0d~mv2.png' },
  { title: 'Bryan & Candy', image: 'https://static.wixstatic.com/media/5cb508_da4abf8f13064fc0bd11466e49ff5865~mv2.png' },
  { title: 'Hektor Shirts', image: 'https://static.wixstatic.com/media/5cb508_41528580bcdc43e88e011a49aa26e783~mv2.png' },
  { title: 'Ferrero Rocher x Diwali', image: 'https://static.wixstatic.com/media/5cb508_ab97c1b8adc146d3b7032397d8209a46~mv2.png' }
];

const Projects = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.set('.project-item', { opacity: 1, y: 0 });
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-item',
        { y: 60, opacity: 0 },
        {
          scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true },
          y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out"
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects" ref={gridRef}>
      <h2 className="section-title">SELECTED <span className="orange-text">WORKS</span></h2>
      <p className="section-subtitle">Cinematic stories and strategic campaigns that define our portfolio.</p>
      
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
