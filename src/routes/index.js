import React, { Component, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    IndexRoute,
} from 'react-router-dom';
import Login from '../views/Login';
import Signup from '../views/Signup';

export default class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        );
    }
}