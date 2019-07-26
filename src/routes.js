import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/wizard/step/:id" component={Wizard} />
    </Switch>
)