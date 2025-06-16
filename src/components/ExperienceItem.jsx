// components/ExperienceItem.js
import React from 'react';
import '../styles/components/experience-item.css';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="experience-info">
          <h3 className="experience-title">{experience.title}</h3>
          <div className="experience-company">{experience.company}</div>
        </div>
        <div className="experience-period">{experience.period}</div>
      </div>
      <p className="experience-description">{experience.description}</p>
      <div className="experience-tags">
        {experience.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;