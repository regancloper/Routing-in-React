import React, { Component } from 'react';
import Film from '../components/Film';

class Films extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err));
    }

    render() {
        let collection = this.state.films.map((item) => {
            return (
                <Film key={item.id} item={item} />
            );
        });

        return (
            <div className="container">
                <div className="card-group">{collection}</div>
            </div>
        );
    }
}

export default Films;