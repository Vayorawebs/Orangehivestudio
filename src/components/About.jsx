import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.set(['.big-intro', '.body-text', '.stat-box'], { opacity: 1, y: 0, scale: 1 });

    const ctx = gsap.context(() => {
      gsap.fromTo('.big-intro',
        { y: 100, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
          y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out"
        }
      );
      gsap.fromTo('.body-text',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out"
        }
      );
      gsap.fromTo('.stat-box',
        { scale: 0.5, opacity: 0 },
        {
          scrollTrigger: { trigger: '.stat-row', start: "top 95%", once: true },
          scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-v2 section-padding" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-left">
          <p className="big-intro">
            WE ARE THE <span className="highlight-box">HIVE</span>.
          </p>
          <p className="big-intro">
            WE CREATE <span className="orange-text">IMPACT</span>.
          </p>
        </div>
        <div className="about-right">
          <p className="body-text">
            Orange Hive Studio offers production expertise geared to execute clutter-breaking ideas. We are a production house with heart, driven by the belief that storytelling should move people to remember and recall.
          </p>
          <p className="body-text">
            We blend cinematic vision with a deep commitment to discipline. By streamlining execution, we deliver premium production values and processual efficiency. With every film, we aim to push our standards higher and create work that grabs and retains attention.
          </p>
          
          <div className="stat-row">
            <div className="stat-box">
              <span className="num">100+</span>
              <span className="lab">PROJECTS</span>
            </div>
            <div className="stat-box">
              <span className="num">15+</span>
              <span className="lab">AWARDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
