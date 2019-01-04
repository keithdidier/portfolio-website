import React from 'react';

import dueScreenShot from '../../../assets/due-screen-shot.png';
import reactLogo from '../../../assets/react-logo.png';
import reduxLogo from '../../../assets/redux.png';
import nodeLogo from '../../../assets/node-logo.png';
import sassLogo from '../../../assets/sass.png';
import postgresqlLogo from '../../../assets/postgresql.png';

const due = () => {
  return (
    <section className="projects">
      <div className="showcase">
        <div className="img-container">
          <a href="https://todue.date/" target="_blank">
            <img src={dueScreenShot} className="projects-screen-shots" />
          </a>
        </div>
        <div className="description">
          <h3>
            <a href="https://todue.date/" target="_blank">
              Due
            </a>
          </h3>
          <p>
            Group developed full-stack web app. Project features a shared
            calendar for college students that want to keep track of their
            assignments and due dates. Using an API that searches over 1,000
            colleges nationwide a student can pick their school, join a class,
            or create one. The administrator for the school’s calendar has
            access to easily add classes and assignments for students.
          </p>
          <div className="project-tech">
            <div className="tech-used">
              <img src={reactLogo} alt="" className="react-logo" />
            </div>
            <div className="tech-used">
              <img src={reduxLogo} alt="" className="redux-logo" />
            </div>
            <div className="tech-used">
              <img src={nodeLogo} alt="" className="node-logo" />
            </div>
            <div className="tech-used">
              <img src={sassLogo} alt="" className="sass-logo" />
            </div>
            <div className="tech-used">
              <img src={postgresqlLogo} alt="" className="postgresql-logo" />
            </div>
          </div>
          <div className="navigation-btn">
            <a href="https://todue.date/" target="_blank">
              <button>Visit website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default due;
