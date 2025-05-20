import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="circles-wrapper">
        <div className="outer-tech">
          {[
            'Kibana', 'Grafana', 'Git', 'Gitlab', 'SQL', 'Postman', 'API',
            'CI/CD', 'PostgreSQL', 'TestRail', 'Jira', 'Bamboo', 'Jenkins',
            'ClickHouse', 'TestDesign', 'MySQL'
          ].map((tech, index, array) => {
            const angle = (index / array.length) * 2 * Math.PI;
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
          {[
            'React', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB',
            'Prisma', 'Express', 'CSS', 'HTML5'
          ].map((tech, index, array) => {
            const angle = (index / array.length) * 2 * Math.PI;
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
        <p>
          <br />
          I’m originally from Russia, but in 2023, due to the political situation, I made the difficult decision
          to leave my country and start a new chapter in Germany. It was one of the biggest changes in my life,
          but also one of the most rewarding.
          <br /><br />
          For the past five years, I worked as a QA Engineer, and this role taught me how to stay curious, detail-oriented,
          and always open to learning. In May 2025, I completed a web development course and discovered a whole new passion.
          Now I’m excited to combine my QA background with my fresh development skills and bring a well-rounded perspective
          to building and testing software.
          <br /><br />
          My focus in web development is on JavaScript, TypeScript, React, and Node.js.
          <br /><br />
          Apart from tech, I’m a big animal lover with three cats who rule the house. In my free time, you’ll find me cycling,
          cooking plant-based meals, designing websites, or getting lost in a good detective novel.
          Music is always around me.
        </p>
      </div>
    </div>
  );
}

export default About;
