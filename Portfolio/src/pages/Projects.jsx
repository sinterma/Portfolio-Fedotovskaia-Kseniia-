import React from 'react';
import './Projects.css';


import decor1 from '../images/little_bacg1.png';
import decor2 from '../images/little_bacg2.png';
import decor3 from '../images/little_bacg3.png';
import decor4 from '../images/little_bacg4.png';

function Projects() {
  return (
    <div className="projects-container">
      <div className="decor-images">
        <img src={decor1} className="decor-img decor-img-1" alt="decor" />
        <img src={decor2} className="decor-img decor-img-2" alt="decor" />
        <img src={decor3} className="decor-img decor-img-3" alt="decor" />
        <img src={decor4} clssName="decor-img decor-img-4" alt="decor" />
      </div>
            <h1> Discover My Projects </h1>
            <p> I believe good code solves real problems. As a web developer, I'm focused on creating practical, reliable, and scalable solutions for businesses and individuals. My experience is growing fast, and every new project adds to my toolkit of effective, modern development practices. If you need someone who cares about your project's success as much as you do — you’re in the right place.</p>
        </div>
 
    );
}

export default Projects;