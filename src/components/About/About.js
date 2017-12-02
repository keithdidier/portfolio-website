import React, {Component} from 'react';
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
            <header className="about-wrapper">
                <div className="headshot-container">
                    <img src={headshot} alt="#" className="headshot" />
                </div>
                <section className="bio">
                    <span className="developer-name">Keith Didier</span>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/keithdidier/" target="_blank"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                        <a href="https://github.com/keithdidier" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         <br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                         <br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br/>
                          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                <section className="technology">
                    <h1 className="lead-text">Tech I'm Experienced In</h1>
                    <img src={reactLogo} alt="" className="react-logo" />
                    <img src={reduxLogo} alt="" className="redux-logo" />
                    <img src={nodeLogo} alt="" className="node-logo" />
                    <img src={html5Logo} alt="" className="html5-logo" />
                    <img src={css3Logo} alt="" className="css3-logo" />
                    <img src={sassLogo} alt="" className="sass-logo" />
                    <img src={postgresqlLogo} alt="" className="postgresql-logo" />                                                                       
                </section>
                <section className="technology">
                    <h1 className="lead-text">Tech I'm Currently Learning</h1>
                    <img src={phpLogo} alt="" className="php-logo" />
                    <img src={laravelLogo} alt="" className="laravel-logo" />
                    <img src={angularLogo} alt="" className="angular-logo" />
                </section>
            </header>
        )
    }
}