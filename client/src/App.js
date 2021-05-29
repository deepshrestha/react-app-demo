import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/home" component={HomeContainer} />
        {/* <Route path="/register" component={UserRegistrationContainer} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
