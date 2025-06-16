// pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/pages/projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Build a Spotify Connected App",
      description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      tags: ["React", "Express", "Spotify API", "Heroku"],
      image: "🎵",
      link: "#"
    },
    {
      title: "Spotify Profile",
      description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      stats: [
        { icon: "⭐", value: "682" }
      ],
      tags: ["React", "Express", "Spotify API", "Heroku"],
      image: "🎧",
      link: "#"
    },
    {
      title: "Halcyon Theme",
      description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      stats: [
        { icon: "⬇", value: "100k+ Installs" }
      ],
      tags: ["VS Code", "Sublime Text", "Atom"],
      image: "🎨",
      link: "#"
    }
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