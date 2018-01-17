import React from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './components/About/About';
// import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

export default(
    <Switch>
        <Route component={About} exact path="/" />
        <Route component={Projects} path="/projects" />
        <Route component={Contact} path="/contact" /> 
        {/* <Route component={Blog} path="/blog" /> */}
    </Switch>
)