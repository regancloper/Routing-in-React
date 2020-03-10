import React, { Component } from 'react';


class FilmDetail extends Component {
    constructor() {
        super();

        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => res.json())
            .then(data => this.setState({ details: data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container my-4">
                <h1>{this.state.details.title}</h1>
                <p>Description: {this.state.details.description}</p>
                <p>Director: {this.state.details.director}</p>
                <p>Producer: {this.state.details.producer}</p>
                <p>Release Date: {this.state.details.release_date}</p>
                <p>Rotton Tomatoes Score: {this.state.details.rt_score}</p>
            </div>

        );;

    }
}


export default FilmDetail;