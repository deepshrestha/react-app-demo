import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import './App.css';

class App extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={LoginForm} />
                    <Route path="/home" component={Home} />
                    <Route component={ErrorPage} />
                </Switch>
            </Router>
        )
    }    
}

export default App;
