// components/Sidebar.js
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import '../styles/components/sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="sidebar">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <SocialLinks />
    </aside>
  );
};

export default Sidebar;