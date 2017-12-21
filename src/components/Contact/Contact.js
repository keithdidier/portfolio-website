import React, {Component} from 'react';
import './Contact.css';
import {MuiThemeProvider, Snackbar} from 'material-ui';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
            value: ""
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

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (event) => {
        this.handleTouchTap();
        event.preventDefault();
    };

    // handleInput = (input, value) => {
    //     this.setState({
    //         input: value
    //     });
    //     console.log(input);
    // };

    // isInputGiven = () => {
    //     if(this.handleInput > 0) {
    //         alert("Submited")
    //         console.log(this.state.handleInput)
    //     };
    // };

    render() {
        return(
            <section id="contact-wrapper">
                <div className="view-title">
                    <h1>Contact</h1>
                </div>
                <section className="contact-para">
                    <p>If you would like to contact me with any questions or opportunities,
                        please feel free to send a message.
                        You are also welcome to contact me through LinkedIn. 
                        <a href="https://www.linkedin.com/in/keithdidier/" target="_blank">
                            <i className="fa fa-external-link" aria-hidden="true"></i>
                        </a>   
                    </p>
                </section>
                <form className="post-message" onSubmit={this.handleSubmit}>
                    <span>Your Name</span>
                    <input type="text" required onChange={this.handleChange}/>
                    <span>Your Email</span>
                    <input type="text" required/>
                    <span>Your Phone Number(optional)</span>
                    <input type="text"/>
                    <span>Subject</span>
                    <input type="text"/>
                    <span>Message</span>
                    <textarea 
                    id="write-message" 
                    rows="8" cols="50" 
                    ></textarea>
                    <div className="send-message">
                        <button onClick={this.isInputGiven} type="submit">Send</button>
                    </div>
                </form>
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