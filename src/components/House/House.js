import React from 'react';

function House(props) {


    return (
        <div>
            <img src={props.house.img} alt="house" />
            <h3>Property Name: {props.house.name}</h3>
            <h3>Address: {props.house.address}</h3>
            <h3>City: {props.house.city}</h3>
            <h3>State: {props.house.state}</h3>
            <h3>Zip: {props.house.zip}</h3>
            <h3>Mortgage: {props.house.mortgage}</h3>
            <h3>Rent: {props.house.mortgage}</h3>
            <button onClick={() => props.deleteHouse(props.house.id)}>Delete</button>
        </div>
    )

}

export default House;