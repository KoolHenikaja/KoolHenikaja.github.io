// pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/pages/projects.css';
import image1 from '../assets/projects/image4.png';
import image2 from '../assets/projects/image5.png';
import image3 from '../assets/projects/image2.png';
import image4 from '../assets/projects/image3.png';
import image5 from '../assets/projects/image1.png';

const Projects = () => {
  const projects = [
    {
      title: "Website for the private institute promoting paramedical services",
      description: "A website for a private institute promoting paramedical services, designed to showcase the institute’s training programs, healthcare initiatives, and community outreach. The platform provides detailed information on available courses, admission procedures, schedules, and professional opportunities in the paramedical field. It serves as a communication bridge between the institute, students, and healthcare professionals, while promoting awareness and accessibility to quality paramedical education and services.",
      tags: ["React.js", "Node.js", "MySQL"],
      image: image1,
      link: "https://isfpp.com/"
    },
    {
      title: "Visibility website for the Mitsimbina 5 health center",
      description: "A visibility website for the Mitsimbina 5 Health Center, created to enhance the center’s online presence and provide essential information to the community. The platform highlights the health services offered, consultation schedules, medical staff profiles, and health awareness campaigns. It also serves as a communication channel between the health center and the public, promoting better access to healthcare resources and services for local residents.",
      stats: [
        { icon: "⭐", value: "682" }
      ],
      tags: ["React.js"],
      image: image2,
      link: "https://sante-mitsimbinav.netlify.app"
    },
    {
      title: "Real-time viewing platform for surveillance cameras",
      description: "A real-time viewing platform for surveillance cameras that enables users to monitor live video feeds from multiple cameras through a single, user-friendly interface. This platform provides instant access to video streams via IP connections, ensuring constant, reliable surveillance for homes, businesses, and public spaces. Designed for efficiency and security, it supports high-quality video, multi-camera management, and real-time alerts to enhance safety and situational awareness.",
      stats: [
        { icon: "⬇" }
      ],
      tags: ["React.js", "Express.js", "PostgreSQL" , "WebRTC"],
      image: image3,
      link: "#"
    },
    {
      title: "School management system for all schools",
      description: "A school management system for all schools designed to simplify and streamline the administrative, academic.",
      stats: [
        { icon: "⬇" }
      ],
      tags: ["React.js", "Spring Boot", "PostgreSQL"],
      image: image4,
      link: "#"
    },
    {
      title: "Platform for delivery and small jobs for students called ATERO",
      description: "ATERO is an innovative platform designed especially for students. It connects students seeking small, flexible jobs and delivery tasks with individuals or businesses in need of specific services. Easy to use and adaptable, ATERO allows young people to earn extra income while fitting work around their academic schedules. It’s both a local service and a valuable stepping stone towards professional experience.",
      stats: [
        { icon: "⬇" }
      ],
      tags: ["React.js", "Spring Boot", "PostgreSQL"],
      image: image5,
      link: "#"
    },

  ];

  return (
    <section className="section projects-section">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;