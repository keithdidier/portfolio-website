import React, {Component} from 'react';
import './Contact.css';
import {MuiThemeProvider, Snackbar} from 'material-ui';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    handleTouchTap = () => {
        this.setState({
          open: true,
        });
      };
    
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return(
            <section id="contact-wrapper">
                <div className="view-title">
                    <h1>Contact</h1>
                </div>
                <section className="contact-para">
                    <p>If you would like to contact me,
                        feel free to send a message in the form to the left.
                        You are also welcome to contact me through LinkedIn. 
                        <a href="https://www.linkedin.com/in/keithdidier/" target="_blank">
                            <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
                        </a>   
                    </p>
                </section>
                <form className="post-message">
                    <input type="text" placeholder=" Name"/>
                    <input type="text" placeholder=" Email"/>
                    <input type="text" placeholder=" Phone"/>
                    <input type="text" placeholder=" Company Name"/>
                    <textarea 
                    id="write-message" 
                    rows="8" cols="50" 
                    placeholder=" Message"></textarea>
                </form>
                <div className="send-message">
                    <button onClick={this.handleTouchTap} type="submit">Send</button>
                </div>
                <MuiThemeProvider>
                    <Snackbar
                    open={this.state.open}
                    message="Thanks for contacting me!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                    />
                </MuiThemeProvider>
            </section>
        )
    }
}