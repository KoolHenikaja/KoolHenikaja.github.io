// pages/Experience.js
import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import '../styles/pages/experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "School of Management and Technological Innovation (EMIT)",
      company: "Master Degree , Modeling and Computer Engineering",
      period: "2025 - Here",
      description: "Leading the creative team for branding and digital interface projects. Developing visual concepts and overseeing their execution.",
      tags: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      title: "School of Management and Technological Innovation (EMIT)",
      company: "License , Internet/Intranet Application Development",
      period: "2022 - 2024",
      description: "User interface design for web and mobile applications. Creation of wireframes, prototypes, and design specifications.",
      tags: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
    },
    {
      title: "Collège Immaculée Conception (CIC M/njary)",
      company: "Baccalaureat Serie D",
      period: "2020 - 2021",
      description: "Natural sciences and mathematics orientation, training focused on scientific rigor and analysis."
    }
  ];

  return (
    <section className="section experience-section">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </section>
  );
};

export default Experience;