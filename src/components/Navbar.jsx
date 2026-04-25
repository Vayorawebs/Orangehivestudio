import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar-v2 ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={handleLogoClick}>
        O.H. STUDIO
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <a href="#about">THE HIVE</a>
        <a href="#projects">WORK</a>
        <a href="#services">CAPABILITIES</a>
        <a href="#contact" className="nav-cta">GET IN TOUCH</a>
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>THE HIVE</a>
        <a href="#projects" onClick={closeMenu}>WORK</a>
        <a href="#services" onClick={closeMenu}>CAPABILITIES</a>
        <a href="#contact" onClick={closeMenu} className="mobile-cta">GET IN TOUCH</a>
      </div>
    </nav>
  );
};

export default Navbar;
