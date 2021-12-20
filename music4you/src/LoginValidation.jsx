import { useState} from "react";

const LoginValidation = (value) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errores, setErrores] = useState({});

  const changer = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    const errorResultado = value(values);
    console.log('Hola', errorResultado);

    setErrores(errorResultado);
  };
  return { changer, values, Submit, errores };
};
export default LoginValidation;
