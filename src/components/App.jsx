import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import FilmDetail from './FilmDetail';
import People from './People';
import PersonDetail from './PersonDetail';


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link className="btn btn-primary" to="/">Go Home</Link>
                    <Link className="btn btn-secondary" to="/films">View Films</Link>
                    <Link className="btn btn-success" to="/people">View People</Link>
                    <Switch>
                        <Route exact path="/" />
                        <Route exact path="/films" component={Films} />
                        <Route path="/films/:id" component={FilmDetail}/>
                        <Route exact path="/people" component={People}/>
                        <Route path="/people/:id" component={PersonDetail}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;