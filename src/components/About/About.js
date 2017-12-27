import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import headshot from '../../assets/EDIT-4452 copy 2.JPG';
import './About.css';
import reactLogo from '../../assets/react-logo.png';
import reduxLogo from '../../assets/redux.png';
import nodeLogo from '../../assets/node-logo.png';
import html5Logo from '../../assets/html5.png';
import css3Logo from '../../assets/css3.png';
import sassLogo from '../../assets/sass.png';
import postgresqlLogo from '../../assets/postgresql.png';
import phpLogo from '../../assets/php.png';
import laravelLogo from '../../assets/laravel.png';
import angularLogo from '../../assets/angular.png';

export default class About extends Component {
    render() {
        return(
            <section id="about-wrapper">
                <div className="about">
                    <div className="headshot-container">
                        <img src={headshot} alt="#" className="headshot" />
                    </div>
                    <div className="bio">
                        <span className="developer-name">Keith Didier</span>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/keithdidier/" target="_blank"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                            <a href="https://github.com/keithdidier" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                        </div>
                        <p>I'm a full-stack web developer with a passion for front-end web development. My focus is on building mobile responsive websites and web apps using primarily React, Node, and SQL. 
</p>
                        <div className="navigation-btn">
                            <Link to="/projects"><button>View my work</button></Link>
                        </div>
                    </div>
                </div>
                <section className="technology">
                    <h1 className="lead-text">Skills</h1>
                    <div className="skills-grid">
                        <div className="skills-column"><img src={reactLogo} alt="" className="react-logo" /><li>ReactJS</li></div>
                        <div className="skills-column"><img src={reduxLogo} alt="" className="redux-logo" /><li>Redux</li></div>
                        <div className="skills-column"><img src={nodeLogo} alt="" className="node-logo" /><li>NodeJS</li></div>
                        <div className="skills-column"><img src={html5Logo} alt="" className="html5-logo" /><li>HTML5</li></div>
                        <div className="skills-column"><img src={css3Logo} alt="" className="css3-logo" /><li>CSS3</li></div>
                        <div className="skills-column"><img src={sassLogo} alt="" className="sass-logo" /><li>Sass</li></div>
                        <div className="skills-column"><img src={postgresqlLogo} alt="" className="postgresql-logo" /><li>PostgreSQL</li></div>
                    </div>                                                                      
                </section>
                <section className="technology">
                    <h1 className="lead-text">What I'm Currently Learning</h1>
                    <div className="skills-grid">
                        <div className="skills-column"><img src={phpLogo} alt="" className="php-logo" /><li>PHP</li></div>
                        <div className="skills-column"><img src={laravelLogo} alt="" className="laravel-logo" /><li>Laravel</li></div>
                        <div className="skills-column"><img src={angularLogo} alt="" className="angular-logo" /><li>AngularJS</li></div>
                    </div>
                </section>
            </section>
        )
    }
}