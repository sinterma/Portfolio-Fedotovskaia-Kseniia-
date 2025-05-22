import React from 'react';
import './Projects.css';

import decor1 from '../images/little_bacg1.png';
import decor2 from '../images/little_bacg2.png';
import decor3 from '../images/little_bacg3.png';
import decor4 from '../images/little_bacg4.png';

import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

function Projects() {
  const projects = [
    {
      id: 1,
      img: project1,
      title: 'Project One',
      description: 'This is a description of project one. It does amazing things and solves problems.'
    },
    {
      id: 2,
      img: project2,
      title: 'Project Two',
      description: 'Second project is about creating awesome interfaces and smooth animations.'
    },
    {
      id: 3,
      img: project3,
      title: 'Project Three',
      description: 'The third project focuses on backend API development with secure auth.'
    }
  ];

  return (
    <div className="projects-container">
      <div className="decor-images">
        <img src={decor1} className="decor-img decor-img-1" alt="decor" />
        <img src={decor2} className="decor-img decor-img-2" alt="decor" />
        <img src={decor3} className="decor-img decor-img-3" alt="decor" />
        <img src={decor4} className="decor-img decor-img-4" alt="decor" />
      </div>

      <h1> Discover My Projects </h1>
      <p> I believe good code solves real problems. As a web developer, I'm focused on creating practical, reliable, and scalable solutions for businesses and individuals. My experience is growing fast, and every new project adds to my toolkit of effective, modern development practices. If you need someone who cares about your project's success as much as you do — you’re in the right place.</p>

      <div className="projects-list">
        {projects.map(({ id, img, title, description }) => (
          <div key={id} className="project-item">
            <img src={img} alt={title} className="project-image" />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
