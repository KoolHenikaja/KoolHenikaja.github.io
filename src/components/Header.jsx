// components/Header.jsx
import React from 'react';
import '../styles/components/header.css';

const Header = () => {
  return (
    <div className="profile-section">
      <h1 className="profile-title">Koloina Elie.</h1>
      <h2 className="profile-subtitle">Frontend Developer</h2>
      <p className="profile-description">
        I build accessible, pixel-perfect digital 
        <br /> experiences for the web.
      </p>
    </div>
  );
};

export default Header;