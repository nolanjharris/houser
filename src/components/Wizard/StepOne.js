import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import store, { STEP_ONE } from '../../redux/store';

class StepOne extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleNext = () => {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.name} name="name" onChange={this.handleChange} type="text" />
                <input value={this.state.address} name="address" onChange={this.handleChange} type="text" />
                <input value={this.state.city} name="city" onChange={this.handleChange} type="text" />
                <input value={this.state.state} name="state" onChange={this.handleChange} type="text" />
                <input value={this.state.zip} name="zip" onChange={this.handleChange} type="text" />
                <Link to="/wizard/step/2"><button onClick={this.handleNext} >Next Step</button></Link>
            </div>
        )
    }
}

export default StepOne;