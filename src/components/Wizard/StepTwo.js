import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import store, { STEP_TWO } from '../../redux/store';

class StepTwo extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                img: reduxState.img
            })
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = () => {
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.img} name="img" onChange={this.handleChange} type="text" />
                <Link to="/wizard/step/1"><button onClick={this.handleClick}>Previous</button></Link>
                <Link to="/wizard/step/3"><button onClick={this.handleClick}>Next Step</button></Link>
            </div>
        )
    }
}

export default StepTwo;