import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import './App.css';

function App(){
    return (
        <Router>
            <div>
                <Route exact path='/' component={LoginForm} />
                <Route exact path="/home" component={Home} />
            </div>
        </Router>
    )
}

export default App;
