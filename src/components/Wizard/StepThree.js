import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import store, { STEP_THREE, CLEAR_STORE } from '../../redux/store';

class StepThree extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = () => {
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
    }

    handleSubmit = () => {
        const reduxState = store.getState()
        const { name, address, city, state, zip, img } = reduxState;
        const { mortgage, rent } = this.state;
        const newHouse = { name, address, city, state, zip, img, mortgage, rent };
        axios.post('/api/houses', newHouse)
            .then(this.props.history.push('/'))
            .catch(err => console.log(err));
        store.dispatch({
            type: CLEAR_STORE
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.mortgage} name="mortgage" onChange={this.handleChange} type="text" />
                <input value={this.state.rent} name="rent" onChange={this.handleChange} type="text" />
                <Link to="/wizard/step/2"><button onClick={this.handleClick}>Previous</button></Link>
                <button onClick={this.handleSubmit}>Complete</button>
            </div>
        )
    }
}

export default StepThree;