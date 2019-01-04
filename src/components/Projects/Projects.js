import React, { Component } from 'react';

import './Projects.css';
import DevHub from './Project/DevHub';
import BurgerBuilder from './Project/BurgerBuilder';
import Due from './Project/Due';

export default class Projects extends Component {
  render() {
    return (
      <section id="portfolio-wrapper">
        <div className="recent-work">
          <h1>Recent Work</h1>
        </div>
        <DevHub />
        <BurgerBuilder />
        <Due />
      </section>
    );
  }
}
