import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import 'font-awesome/css/font-awesome.min.css';
import {MuiThemeProvider, Drawer, MenuItem} from 'material-ui';
import MediaQuery from 'react-responsive';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return(
            <header className="nav">
                <div className="brand">
                    <span><Link to="/">Keith Didier</Link></span>
                </div>
                <MediaQuery query="(max-width: 1024px)">
                    <MuiThemeProvider>
                        <Drawer docked={false}
                            width={250}
                            open={this.state.open}
                            openSecondary={true}
                            onRequestChange={(open) => this.setState({open})}>
                            <MenuItem onClick={this.handleClose}><span><Link to="/">About</Link></span></MenuItem>
                            <MenuItem onClick={this.handleClose}><span><Link to="/projects">Projects</Link></span></MenuItem>
                            <MenuItem onClick={this.handleClose}><span><Link to="/contact">Contact</Link></span></MenuItem>
                            {/* <MenuItem onClick={this.handleClose}><span><Link to="/esources">Resources</Link></span></MenuItem> */}
                        </Drawer>
                    </MuiThemeProvider>
                    <i className="fa fa-bars" aria-hidden="true" onClick={this.handleToggle}></i>
                </MediaQuery>
                <MediaQuery query="(min-width: 1024px)">
                <div className="nav-links">
                    <span><Link to="/">About</Link></span>
                    <span><Link to="/projects">Projects</Link></span>
                    <span><Link to="/contact">Contact</Link></span>
                    {/* <span><Link to="/resources">Resources</Link></span> */}
                </div>
                </MediaQuery>
            </header>
        )
    }
}