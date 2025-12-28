import React from 'react';
import './About.css';
import decorLeft from '../images/little_bacg3.png';
import decorRight from '../images/little_bacg4.png';

function About() {
  return (
    <div className="about-container">
      <img src={decorLeft} alt="" className="about-decor-left" />
      <img src={decorRight} alt="" className="about-decor-right" />
      <div className="circles-wrapper">
        <div className="outer-tech">
          {[
            'Kibana', 'Grafana', 'Git', 'Gitlab', 'SQL', 'Postman',
            'CI/CD', 'PostgreSQL', 'TestRail', 'Jira', 'Bamboo', 'Jenkins',
            'ClickHouse', 'MySQL', 'Playwright'
          ].map((tech, index, array) => {
            const angle = (index / array.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 250;
            const x = 250 + radius * Math.cos(angle);
            const y = 250 + radius * Math.sin(angle);
            return (
              <span
                key={index}
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="floating-tech">
          <div className="floating-tech-center-text">Tech stack</div>
          {[
            'React', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB',
            'Prisma', 'Express', 'CSS', 'HTML5'
          ].map((tech, index, array) => {
            const angle = (index / array.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 150;
            const x = 150 + radius * Math.cos(angle);
            const y = 150 + radius * Math.sin(angle);
            return (
              <span
                key={index}
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      <div className="about-content">
  <h1>So, who am I?</h1>
  <div className="about-text-box">
    <p>
      I'm an <strong>Automation QA Engineer</strong> with 5+ years of experience ensuring software quality
      through manual and automated testing.
      <br /><br />
      Currently based in Berlin, I specialize in test automation with Playwright (TypeScript/JavaScript),
      CI/CD pipelines, and quality assurance processes. Having completed a full-stack web development bootcamp,
      I bring a developer's perspective to testing.
      <br /><br />
      Outside of work, you'll find me cycling, cooking plant-based meals, or lost in a detective novel
      — always with music and my cat nearby.
    </p>
  </div>
</div>
    </div>
  );
}

export default About;
