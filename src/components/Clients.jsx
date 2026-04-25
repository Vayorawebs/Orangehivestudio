import React from 'react';
import './Clients.css';

const Clients = () => {
  return (
    <div className="clients-marquee">
      <div className="marquee-content">
        <span className="marquee-text">TRUSTED BY LEADING BRANDS ✦ </span>
        <span className="marquee-text">AWARD WINNING PRODUCTION ✦ </span>
        <span className="marquee-text">CLUTTER BREAKING IDEAS ✦ </span>
        {/* Doubled for seamless loop */}
        <span className="marquee-text">TRUSTED BY LEADING BRANDS ✦ </span>
        <span className="marquee-text">AWARD WINNING PRODUCTION ✦ </span>
        <span className="marquee-text">CLUTTER BREAKING IDEAS ✦ </span>
        <span className="marquee-text">TRUSTED BY LEADING BRANDS ✦ </span>
        <span className="marquee-text">AWARD WINNING PRODUCTION ✦ </span>
        <span className="marquee-text">CLUTTER BREAKING IDEAS ✦ </span>
      </div>
    </div>
  );
};

export default Clients;
  
