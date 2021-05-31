import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppTheme from "./AppTheme";
import ErrorPage from "./components/ErrorPage";
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";
import UserRegistrationContainer from "./containers/UserRegistrationContainer";

const generateClassName = createGenerateClassName({
  seed: "cibt",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/register" component={UserRegistrationContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
