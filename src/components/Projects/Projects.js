import React, {Component} from 'react';
import './Projects.css';
import rbcScreenShot from '../../assets/rbc-screen-shot.png';
import dueScreenShot from '../../assets/due-screen-shot.png';
// Tech images
import reactLogo from '../../assets/react-logo.png';
import reduxLogo from '../../assets/redux.png';
import nodeLogo from '../../assets/node-logo.png';
import html5Logo from '../../assets/html5.png';
import css3Logo from '../../assets/css3.png';
import sassLogo from '../../assets/sass.png';
import postgresqlLogo from '../../assets/postgresql.png';

export default class Projects extends Component {
    render() {
        return(
            <section id="portfolio-wrapper">
                <div className="recent-work">
                    <h1>Recent Work</h1>
                </div>
                <section className="projects">
                    <div className="showcase">
                        <div className="img-container">
                            <a href="http://rbclone.keithdidier.com/#/" target="_blank">
                                <img src={rbcScreenShot} className="projects-screen-shots"/>
                            </a>
                        </div>
                        <div className="description">
                            <h3><a href="http://rbclone.keithdidier.com/#/" target="_blank">Redbubble Clone</a></h3>
                            <p>eCommerce based full-stack web app inspired by Redbubble. This site allows for a natural shopping experience with a user friendly, minimalistic design on all devices.
RESTful APIs were used to create, read, update, and delete data in the database.</p>
                            <div className="project-tech">
                                <div className="tech-used"><img src={reactLogo} alt="" className="react-logo" /></div>
                                <div className="tech-used"><img src={reduxLogo} alt="" className="redux-logo" /></div>
                                <div className="tech-used"><img src={nodeLogo} alt="" className="node-logo" /></div>
                                <div className="tech-used"><img src={html5Logo} alt="" className="html5-logo" /></div>
                                <div className="tech-used"><img src={css3Logo} alt="" className="css3-logo" /></div>
                                <div className="tech-used"><img src={sassLogo} alt="" className="sass-logo" /></div>
                                <div className="tech-used"><img src={postgresqlLogo} alt="" className="postgresql-logo" /></div>
                            </div>
                            <div className="navigation-btn">
                                <a href="http://rbclone.keithdidier.com/#/" target="_blank"><button>Visit Website</button></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <div className="showcase">
                        <div className="img-container">
                            <a href="https://todue.date/" target="_blank">
                                <img src={dueScreenShot} className="projects-screen-shots"/>
                            </a>
                        </div>
                        <div className="description">
                            <h3><a href="https://todue.date/" target="_blank">due.</a></h3>
                            <p>Group developed full-stack web app. Project features a shared calendar for college students that want to keep track of their assignments and due dates.
Using an API that searches over 1,000 colleges nationwide a student can pick their school, join a class, or create one. The administrator for the school’s calendar has access to easily add classes and assignments for students.</p>
                            <div className="project-tech">
                                <div className="tech-used"><img src={reactLogo} alt="" className="react-logo" /></div>
                                <div className="tech-used"><img src={reduxLogo} alt="" className="redux-logo" /></div>
                                <div className="tech-used"><img src={nodeLogo} alt="" className="node-logo" /></div>
                                <div className="tech-used"><img src={html5Logo} alt="" className="html5-logo" /></div>
                                <div className="tech-used"><img src={css3Logo} alt="" className="css3-logo" /></div>
                                <div className="tech-used"><img src={sassLogo} alt="" className="sass-logo" /></div>
                                <div className="tech-used"><img src={postgresqlLogo} alt="" className="postgresql-logo" /></div>
                            </div>
                            <div className="navigation-btn">
                                <a href="https://todue.date/" target="_blank"><button>Visit website</button></a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}