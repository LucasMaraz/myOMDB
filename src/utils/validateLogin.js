export default function validateLogin(values) {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let errors = {};
  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email es invalido";
  }
  if (!values.password) {
    errors.password = "Contraseña es requerido";
  } else if (format.test(values.password)) {
    errors.password = "Contraseña es invalidoo";
  }
  return errors;
}
