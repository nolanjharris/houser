import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import store, { CLEAR_STORE } from '../../redux/store';

function Wizard(props) {

    const handleCancel = () => {
        store.dispatch({
            type: CLEAR_STORE
        })
    }

    return (
        <div>
            Wizard
                <Link to="/"><button onClick={handleCancel}>Cancel</button></Link>
            <Switch>
                <Route path="/wizard/step/1" component={StepOne} />
                <Route path="/wizard/step/2" component={StepTwo} />
                <Route path="/wizard/step/3" component={StepThree} />
            </Switch>
        </div>
    )
}


export default Wizard;