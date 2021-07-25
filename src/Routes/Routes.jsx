import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;