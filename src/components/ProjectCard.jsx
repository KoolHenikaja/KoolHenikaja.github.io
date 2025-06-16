// components/ProjectCard.js
import React from 'react';
import '../styles/components/project-card.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link || '#'} className="project-link" target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          {project.image || 'IMG'}
        </div>
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <span className="external-link">↗</span>
          </div>
          <p className="project-description">{project.description}</p>
          {project.stats && (
            <div className="project-stats">
              {project.stats.map((stat, index) => (
                <div key={index} className="stat">
                  <span>{stat.icon}</span>
                  <span>{stat.value}</span>
                </div>
              ))}
            </div>
          )}
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;