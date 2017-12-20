import React, {Component} from 'react';
import './Portfolio.css';
import rbcScreenShot from '../../assets/rbc-screen-shot.png';


export default class Portfolio extends Component {
    render() {
        return(
            <section id="portfolio-wrapper">
                <div className="recent-work">
                    <h1>Recent Work</h1>
                </div>
                <section className="projects">
                    <div className="showcase">
                        <div className="img-container">
                            <a href="http://104.236.218.72:3010/#/" target="_blank">
                                <img src={rbcScreenShot} className="rbc-screen-shot"/>
                            </a>
                        </div>
                        <div className="description">
                            <h3><a href="http://104.236.218.72:3010/#/" target="_blank">Redbubble Clone</a></h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available,<br/>
                                but the majority have suffered alteration in some form,<br/>
                                by injected humour, or randomised words which don't look even<br/>
                                slightly believable. If you are going to use a passage of Lorem<br/>
                                Ipsum, you need to be sure there isn't anything embarrassing<br/>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}