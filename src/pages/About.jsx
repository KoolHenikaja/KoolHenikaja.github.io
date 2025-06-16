// pages/About.js
import React from 'react';
import '../styles/pages/about.css';

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-content">
        <p>
          I'm a passionate developer with a strong foundation in creating robust and scalable applications.
          With expertise in a variety of technologies including <span className="highlight">Express.js</span>, <span className="highlight">React.js</span>, and others, I bring a holistic approach to building web and mobile solutions that deliver exceptional user experiences.
        </p>
        <p>
          Currently, I'm a developer focused on crafting accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design with solid engineering practices.
          My favorite projects lie at the intersection of design and development — creating experiences that not only look great but are meticulously optimized for performance and usability.
        </p>
        <p>
          In the past, I've had the chance to work across a wide range of environments — from <span className="highlight">advertising agencies</span> and <span className="highlight">corporate teams</span> to <span className="highlight">startups</span> and <span className="highlight">small digital</span>.
          This variety has shaped my ability to adapt quickly, collaborate effectively, and deliver high-quality solutions in diverse contexts.
        </p>
        <p>
          Beyond coding, I enjoy spending my time exploring new technologies, creating side projects, reading about product design, and sometimes venturing outdoors for a good hike.
          I'm always curious about how technology can solve real-world problems and improve people's lives.
        </p>
        <p>
          Let's work together to turn your digital ideas into reality.
          Whether you need a powerful backend, a responsive frontend, or the perfect fusion of both, I'm here to make it happen.
          &nbsp;<strong>Get in touch, and let's bring your vision to life!</strong>
        </p>
      </div>
    </section>
  );
};

export default About;