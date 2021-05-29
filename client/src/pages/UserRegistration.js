import React from "react";
import { Link } from "react-router-dom";

const UserRegistration = ({ onHandleChange, onHandleSubmit, errors }) => {
  return (
    <div className="text-center">
      <h2>Register New User</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="form-control-sm inputText"
              placeholder="Full Name"
              autoFocus
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.fullname}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              User Name
            </label>
            <input
              type="text"
              name="username"
              className="form-control-sm inputText"
              placeholder="User Name"
              autoFocus
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.username}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              City
            </label>
            <input
              type="text"
              name="city"
              className="form-control-sm inputText"
              placeholder="City"
              autoFocus
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.city}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control-sm inputText"
              placeholder="Email"
              autoFocus
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.email}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control-sm inputText"
              placeholder="Password"
              autoFocus
              onChange={onHandleChange}
            />
            <div className="inputError">{errors.password}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 offset-2">
            <label htmlFor="inputEmail" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control-sm inputText"
              placeholder="Confirm Password"
              autoFocus
              onChange={onHandleChange}
            />
          </div>
        </div>

        <div className="m-2">
          <button className="btn btn-md btn-primary">Register</button>
        </div>
      </form>
      <Link to="/">Already Registered</Link>
    </div>
  );
};

export default UserRegistration;
