import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export const useForm = (validates, key) => {
  const history = useHistory();

  let objectValues = {};
  const [values, setValues] = React.useState(objectValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }

    key === "register"
      ? (objectValues = {
          username: "",
          email: "",
          password: "",
          password2: "",
        })
      : (objectValues = {
          email: "",
          password: "",
        });
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validates(values));
    setIsSubmitting(true);
  };

  const submitForm = () => {
    key === "register"
      ? axios
          .post("/api/auth/register", {
            ...values,
          })
          .then((res) => res.data)
          .then(
            Swal.fire({
              icon: "success",
              title: "Account created",
              showConfirmButton: false,
              timer: 3000,
            })
          )
          .then(() => history.push("/login"))
          .catch(() =>
            Swal.fire({
              title: "ERROR",
              text: "Username or password incorrect",
              icon: "error",
              confirmButtonText: "Ok",
            })
          )
      : axios
          .post("/api/auth/login", {
            ...values,
          })
          .then((res) => res.data)
          .then(
            Swal.fire({
              icon: "success",
              title: "Successfully logged in",
              showConfirmButton: false,
              timer: 3000,
            })
          )
          .then(() => history.push("/home"))
          .then(() => window.location.reload())
          .catch(() =>
            Swal.fire({
              title: "ERROR",
              text: "Username or password incorrect",
              icon: "error",
              confirmButtonText: "Ok",
            })
          );
  };

  return {
    values,
    handleSubmit,
    handleChange,
    submitForm,
    errors,
  };
};
