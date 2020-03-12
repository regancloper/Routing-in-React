import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FilmDetail extends Component {
    state = {
        details: {}
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => res.json())
            .then(details => this.setState({ details }))
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
                <Link className="btn btn-link" to="/films">Go Back</Link>
            </div>

        );;

    }
}


export default FilmDetail;