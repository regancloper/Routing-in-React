import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Go to Page 1</Link>
                    <Link to="page2">Go to Page 2</Link>
                    <Switch>
                        <Route path="/" />
                        <Route path="/page2" />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;