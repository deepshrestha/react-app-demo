import React from "react";
import { useHistory } from "react-router-dom";
import Login from "../pages/Login";
import { useFormValidator } from "../utils/useFormValidator";

const LoginContainer = () => {
  console.log(process.env.API_URL);

  const history = useHistory();

  const initialState = {
    email: null,
    password: null,
    errors: {
      email: "",
      password: "",
    },
  };

  const { onHandleChange, onHandleSubmit, fields } =
    useFormValidator(initialState);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = fields;
    if (onHandleSubmit(e)) {
      if (email === "admin@admin.com" && password === "deep@123") {
        history.push("/home");
      } else {
        alert("Login credential is not matched!");
      }
    }
  };

  const { errors } = fields;

  return (
    <>
      <Login
        onFormSubmit={onFormSubmit}
        onHandleChange={onHandleChange}
        errors={errors}
      />
    </>
  );
};

export default LoginContainer;
