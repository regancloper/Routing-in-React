import React, { Component } from 'react';


class PersonDetail extends Component {
    constructor() {
        super();

        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({ details: data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container my-4">
                <h1>{this.state.details.name}</h1>
                <p>Age: {this.state.details.age}</p>
                <p>Gender: {this.state.details.gender}</p>
                <p>Eye Color: {this.state.details.eye_color}</p>
                <p>Hair Color: {this.state.details.hair_color}</p>
            </div>

        );;

    }
}


export default PersonDetail;
