import React, { Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import People from './pages/People';
import PersonDetail from './pages/PersonDetail';
import Navbar from './components/nav/Navbar';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={() => <h1 className="mt-5 text-center display-1">Home Page: Here it is!</h1>}/>
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={FilmDetail}/>
                        <Route exact path="/people" component={People}/>
                        <Route exact path="/people/:id" component={PersonDetail}/>
                        <Route component={() => <h1 className="mt-5 text-center display-1">Error: 404</h1>}/>
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;