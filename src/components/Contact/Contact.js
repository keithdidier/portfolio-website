import React, {Component} from 'react';
import './Contact.css';


export default class Contact extends Component {
    render() {
        return(
            <section className="contact-wrapper">
                <div className="view-title">
                    <h1>Contact</h1>
                </div>
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
                    <button type="submit">Send</button>
                </div>
            </section>
        )
    }
}