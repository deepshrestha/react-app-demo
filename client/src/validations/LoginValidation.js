export default function validation(formState) {
  let errors = {};

  if (!formState.email) {
    errors.email = "This field is required.";
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = "Email is invalid.";
  }

  if (!formState.password) {
    errors.password = "This field is required.";
  } else if (formState.password < 5) {
    errors.password = "Password cannot be less than 5 characters.";
  }
  return errors;
}
