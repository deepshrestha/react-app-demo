import React from "react";
import { useHistory } from "react-router";
import useApiHandler from "../api/useApiHandler";
import UserRegistration from "../pages/UserRegistration";
import useFormValidator from "../utils/useFormValidator";
import validation from "../validations/UserRegistrationValidation";

const UserRegistrationContainer = () => {
  const history = useHistory();
  const initialState = {
    fullname: null,
    username: null,
    email: null,
    password: null,
    errors: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  };

  const formSubmit = () => {
    let data = {
      fullname: formState.fullname,
      username: formState.username,
      email: formState.email,
      password: formState.password,
      confirmPassword: formState.confirmPassword,
      city: formState.city,
    };
    if (formState.password === formState.confirmPassword) {
      useApiHandler("http://localhost:8200/api/user/add", "post", data)
        .then((result) => {
          if (result) {
            history.push("/");
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    } else {
      alert();
    }
  };

  const { onHandleChange, onHandleSubmit, errors, formState } =
    useFormValidator(initialState, validation, formSubmit);
  return (
    <>
      <UserRegistration
        onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit}
        errors={errors}
      />
    </>
  );
};

export default UserRegistrationContainer;
