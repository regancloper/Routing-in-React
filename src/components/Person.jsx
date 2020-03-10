import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Person = (props) => {
    return (
        <div className="col-md-4 py-2">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.details.name}</h5>
                    <p className="card-text">Age: {props.details.age}</p>
                    <p className="card-text">Gender: {props.details.gender}</p>
                    <Link to={`/people/${props.details.id}`}>See Details</Link>
                </div>
            </div>
        </div>

    );

}


export default Person;