import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import HomeContainer from "./containers/HomeContainer";
// import LoginContainer from "./containers/LoginContainer";
import Login from "./components/Login"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={HomeContainer} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
