import React from 'react';

import bbScreenShot from '../../../assets/burger-screen-shot.png';
import reactLogo from '../../../assets/react-logo.png';
import reduxLogo from '../../../assets/redux.png';
import firebaseLogo from '../../../assets/firebase-logo.png';

const burgerBuilder = () => {
  return (
    <section className="projects">
      <div className="showcase">
        <div className="img-container">
          <a
            href="https://burger-builder-22f3d.firebaseapp.com/"
            target="_blank"
          >
            <img src={bbScreenShot} className="projects-screen-shots" />
          </a>
        </div>
        <div className="description">
          <h3>
            <a
              href="https://burger-builder-22f3d.firebaseapp.com/"
              target="_blank"
            >
              Burger Builder
            </a>
          </h3>
          <p>
            <p>
              **To log in and explore this app use username: test@email.com and
              password: password**
            </p>{' '}
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
              <img src={firebaseLogo} alt="" className="firebase-logo" />
            </div>
          </div>
          <div className="navigation-btn">
            <a
              href="https://burger-builder-22f3d.firebaseapp.com/"
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
