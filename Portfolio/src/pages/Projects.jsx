import React from 'react';
import './Projects.css';

import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import decorImg from '../images/little_bacg1.png';

function Projects() {
  const projects = [
    {
      id: 1,
      img: project1,
      title: 'Pawradise',
      description: 'Pet products e-commerce platform with CRUD functionality, shopping cart, and admin dashboard.',
      tech: 'React, JavaScript, Axios, CSS',
      url: 'https://pawradise-pet-shop.netlify.app'
    },
    {
      id: 2,
      img: project2,
      title: 'Once Upon a Paw',
      description: 'Full-stack animal shelter app with role-based access, admin panel, and CRUD for pets.',
      tech: 'React, Node.js, Express, MongoDB, Mantine UI',
      url: 'https://once-upon-a-paw.netlify.app'
    },
    {
      id: 3,
      img: project3,
      title: 'Holy Broccoli',
      description: 'Full-stack recipe book app with CRUD, search, categories, and user feedback.',
      tech: 'React, TypeScript, Express, PostgreSQL, Prisma, Bootstrap',
      url: 'https://vegan-recipes-book.netlify.app'
    }
  ];

  return (
    <div className="projects-container">
      <img src={decorImg} alt="" className="decor-top-right" />
      <img src={decorImg} alt="" className="decor-top-left" />
      <h1>My Projects</h1>

      <div className="projects-list">
        {projects.map(({ id, img, title, description, tech, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-item ${url ? 'clickable' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            <img src={img} alt={title} className="project-image" />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              {tech && <span className="project-tech">{tech}</span>}
            </div>
          </a>
        ))}
      </div>
      <div className="footer-spacer"></div>
    </div>
  );
}

export default Projects;
