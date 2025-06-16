// pages/Experience.js
import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import '../styles/pages/experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      period: "2024 — Present",
      description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      tags: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      title: "Lead Engineer • Upstatement",
      company: "Senior Engineer • Engineer",
      period: "2018 — 2024",
      description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      tags: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
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