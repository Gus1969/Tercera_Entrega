function SetLoginErrors(values) {
  let errores = [];

  if (!values.email) {
    errores.email = "Your email is required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
    errores.email = "Invalid email address";
  }

  if (!values.password) {
    errores.password = "Enter your password please";
  } else if (values.password.length < 5) {
    errores.password = " Your passport should contain at least 6 characters";
  }

  return errores;
}
export default SetLoginErrors;
