import React, { Component } from 'react';
import Film from './Film';

class Films extends Component {

    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
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