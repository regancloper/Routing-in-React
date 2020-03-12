import React, { Component } from 'react';
import Person from '../components/Person';

class People extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(arr => this.setState({ people: arr }))
            .catch(err => console.log(err));
    }

    render() {
        let peopleData = this.state.people.map((person) => {
            return (
                <Person key={person.id} details={person} />
            );
        });

        return (
            <div className="container">
                <div className="card-group">{peopleData}</div>
            </div>

        );
    }
}

export default People;