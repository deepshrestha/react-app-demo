import React from "react";
import { useHistory } from "react-router-dom";
import Login from "../pages/Login";
import useFormValidator from "../utils/useFormValidator";
import validation from "../validations/LoginValidation";

const LoginContainer = () => {
  const history = useHistory();

  const initialState = {
    email: null,
    password: null,
    errors: {
      email: "",
      password: "",
      message: "",
    },
  };

  const formSubmit = () => {
    if (
      formState.email === "admin@admin.com" &&
      formState.password === "deep@123"
    ) {
      history.push("/home");
    } else {
      alert("Login credential is not matched!");
    }
  };

  const { onHandleSubmit, onHandleChange, errors, formState } =
    useFormValidator(initialState, validation, formSubmit);

  return (
    <>
      <Login
        onHandleSubmit={onHandleSubmit}
        onHandleChange={onHandleChange}
        errors={errors}
      />
    </>
  );
};

export default LoginContainer;
