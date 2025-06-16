// components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGitlab } from 'react-icons/fa';
import '../styles/components/social-links.css';
import GIF from '../assets/rotate.gif';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={34} />, href: 'https://github.com/KoolHenikaja' },
    { name: 'LinkedIn', icon: <FaLinkedin size={34} />, href: 'https://www.linkedin.com/in/koloina-elie-ravaloarimanana-623bab247/' },
    { name: 'Whatsapp', icon: <FaWhatsapp size={34} />, href: '+261342571374' },
    { name: 'GitLab', icon: <FaGitlab size={34} />, href: 'https://gitlab.com/koloinaelie25' }
  ];

  return (
    <div className="social-links">
      {socialLinks.map(link => (
        <a 
          key={link.name} 
          href={link.href} 
          className="social-link" 
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    
      {/* Floating button */}
      <button className="floating-button">
        <img src={GIF} alt="gif" className="gif-icon" />
      </button>
    </div>
  );
};

export default SocialLinks;
