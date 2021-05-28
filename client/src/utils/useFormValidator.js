import { useEffect, useState } from "react";

const FormValidator = (initialState, validation, callBack) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    setErrors(validation(formState));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formState));
    setIsSubmitting(true);
  };

  

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callBack();
    }
  }, [errors]);

  return {
    onHandleChange,
    onHandleSubmit,
    formState,
    errors,
  };
};

export default FormValidator;
