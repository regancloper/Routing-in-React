import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';

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
                        <Route path="/films/:id" />
                        <Route exact path="/people" />
                        <Route path="/people/:id" />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;