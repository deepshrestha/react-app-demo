import React from "react";
import { useHistory } from "react-router";
import UserRegistration from "../pages/UserRegistration";
import { useFormValidator } from "../utils/useFormValidator";

const UserRegistrationContainer = () => {
  const history = useHistory();
  const initialState = {
    fullname: null,
    username: null,
    email: null,
    password: null,
    city: null,
    errors: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  };

  const { onHandleChange, onHandleSubmit, fields } =
    useFormValidator(initialState);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const { fullname, username, email, password, city } = fields;

    let data = {
      fullname: fields.fullname,
      username: fields.username,
      email: fields.email,
      password: fields.password,
      confirmPassword: fields.confirmPassword,
      city: fields.city,
    };

    if (onHandleSubmit(e)) {
      e.preventDefault();
      console.log(data);
      if (fields.password === fields.confirmPassword) {
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
    }
  };

  const { errors } = fields;

  return (
    <>
      <UserRegistration
        onFormSubmit={onFormSubmit}
        onHandleChange={onHandleChange}
        errors={errors}
      />
    </>
  );
};

export default UserRegistrationContainer;
