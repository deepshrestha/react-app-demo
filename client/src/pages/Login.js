import {
  Avatar,
  Box,
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { common } from "@material-ui/core/colors";
import React from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import CIBTLogo from "../images/cibtlogo.jpg";

const useStyles = makeStyles((theme) => ({
  authWrapper: {
    height: "100vh",
    width: "100%",
    zIndex: 1,
    overflow: "hidden",
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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={2}
      position="relative"
      className={classes.authWrapper}
    >
      <Box
        padding={3}
        borderRadius={4}
        bgcolor={common.white}
        className={classes.authForm}
      >
        <form onSubmit={onFormSubmit}>
          <Avatar alt="CIBT Login" src="/src/images/user-login.jpg" />
          <Typography variant="h4" align="center" gutterBottom>
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
    </Box>
  );
};

export default Login;
