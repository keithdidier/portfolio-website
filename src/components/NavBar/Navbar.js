import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import 'font-awesome/css/font-awesome.min.css';
import {MuiThemeProvider, Drawer, MenuItem} from 'material-ui';

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
                <MuiThemeProvider>
                    <Drawer docked={false}
                        width={200}
                        open={this.state.open}
                        openSecondary={true}
                        onRequestChange={(open) => this.setState({open})}>
                        <MenuItem><span><Link to="/">Portfolio</Link></span></MenuItem>
                        <MenuItem><span><Link to="/about">About</Link></span></MenuItem>
                        <MenuItem><span><Link to="/contact">Contact</Link></span></MenuItem>
                        <MenuItem><span><Link to="/blog">Blog</Link></span></MenuItem>
                    </Drawer>
                </MuiThemeProvider>
                <i className="fa fa-bars" aria-hidden="true" onClick={this.handleToggle}></i>
            </header>
        )
    }
}