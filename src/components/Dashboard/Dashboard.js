import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses').then(response => {
            this.setState({ houses: response.data });
            console.log(response)
        }).catch(error => console.log(error))
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then(response => {
            this.setState({ houses: response.data });
        }).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                Dashboard
                <Link to="/wizard/step/1"><button>Add New Property</button></Link>
                {this.state.houses.length === 0 ?
                    <h2>Loading...</h2> :
                    this.state.houses.map((house, index) => {
                        return <House deleteHouse={this.deleteHouse} key={index} house={house} />
                    })}
            </div>
        )
    }
}

export default Dashboard;