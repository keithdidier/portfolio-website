import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

export default(
    <Switch>
        <Route component={Portfolio} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Blog} path="/blog" />
    </Switch>
)