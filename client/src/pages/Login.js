import {
  Box,
  Button,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { common } from "@material-ui/core/colors";
import React from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import CIBTLogo from "../images/cibtlogo.png";

const useStyles = makeStyles((theme) => ({
  authWrapper: {
    height: "100vh",
    zIndex: 1,
    overflow: "hidden",
    padding: 0,
    margin: 0,
    width: "100%",
    "&:after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // content: `''`,
      background: `url(${CIBTLogo}) no-repeat`,
      zIndex: -1,
      transform: "rotate(-10deg) scale(1.5)",
      opacity: 0.1,
    },
  },

  logoContainer: {
    maxWidth: 100,
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(10),
    },
  },

  authForm: {
    width: "100%",
    maxWidth: 400,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  primaryLink: {
    marginTop: theme.spacing(1),
    display: "inline-block",
  },
}));

const Login = ({ onFormSubmit, onHandleChange, errors }) => {
  const classes = useStyles();
  const history = useHistory();

  const onUserRegistration = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      className={classes.authWrapper}
    >
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        container
        justify="flex-end"
      >
        <figure className={classes.logoContainer}>
          <img alt="CIBT Login" src={CIBTLogo} />
        </figure>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box
          padding={4}
          borderRadius={4}
          bgcolor={common.white}
          className={classes.authForm}
        >
          <form onSubmit={onFormSubmit}>
            <Typography variant="h4" gutterBottom>
              Please sign in
            </Typography>

            <Box mb={2}>
              <TextField
                fullWidth
                required
                label="Email address"
                type="email"
                name="email"
                autoFocus
                onChange={onHandleChange}
              />
              <ErrorMessage errorMsg={errors.email} />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                required
                label="Password"
                type="password"
                name="password"
                onChange={onHandleChange}
              />
              <ErrorMessage errorMsg={errors.password} />
            </Box>

            <Button
              disableElevation
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
            >
              Sign In
            </Button>
          </form>

          <Box textAlign="center">
            <Link
              href="#"
              onClick={onUserRegistration}
              className={classes.primaryLink}
            >
              Register New User
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
