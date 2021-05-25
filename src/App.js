import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/home" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
