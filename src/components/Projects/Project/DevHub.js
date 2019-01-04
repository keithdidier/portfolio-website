import React from 'react';
import devhubSreenShot from '../../../assets/devhub-screen-shot.png';
import reactLogo from '../../../assets/react-logo.png';
import reduxLogo from '../../../assets/redux.png';
import nodeLogo from '../../../assets/node-logo.png';
import mongodbLogo from '../../../assets/mongodb-logo.png';

const burgerBuilder = () => {
  return (
    <section className="projects">
      <div className="showcase">
        <div className="img-container">
          <a href="https://secure-waters-39610.herokuapp.com/" target="_blank">
            <img src={devhubSreenShot} className="projects-screen-shots" />
          </a>
        </div>
        <div className="description">
          <h3>
            <a
              href="https://secure-waters-39610.herokuapp.com/"
              target="_blank"
            >
              DevHub
            </a>
          </h3>
          <p>
            <p>
              **To log in and explore this app use username: test@email.com and
              password: password**
            </p>
            Build a custom burger, signup/login, place your order and fill out
            necessary form data. As well as view past orders. This application
            was built using React, Redux, CSS Modules and Google's Firebase.
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
              <img src={mongodbLogo} alt="" className="mongodb-logo" />
            </div>
          </div>
          <div className="navigation-btn">
            <a
              href="https://secure-waters-39610.herokuapp.com/"
              target="_blank"
            >
              <button>Visit Website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default burgerBuilder;
