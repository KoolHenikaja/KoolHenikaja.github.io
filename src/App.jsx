// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import VantaBackground from './components/VantaBackground';
import './styles/global.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <VantaBackground />
    <div className="overlay-pattern"></div>
    <div className="portfolio-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
    </div>
  );
};

export default App;