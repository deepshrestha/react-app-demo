import React from "react";

const Login = ({ onFormSubmit, onHandleChange, errors, onHandleBlur }) => {
  return (
    <div className="text-center">
      <form className="form-signin" onSubmit={onFormSubmit}>
        <img
          className="mb-4"
          src="/src/images/user-login.jpg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3">Please sign in</h1>
        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control-sm inputText"
              placeholder="Email address"
              size="35"
              autoFocus
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.email}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control-sm inputText"
              placeholder="Password"
              size="35"
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.password}</div>
          </div>
        </div>
        <div className="m-2">
          <button className="btn btn-md btn-primary">Sign in</button>
        </div>
      </form>
      {/* <Link to="/register">Register</Link> */}
    </div>
  );
};

export default Login;
