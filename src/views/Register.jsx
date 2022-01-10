import React from "react";
import { useForm } from "../hooks/useForm";
import { LockClosedIcon } from "@heroicons/react/solid";
import validateRegister from "../utils/validateRegister";

const Register = () => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateRegister,
    "register"
  );
  return (
    <React.Fragment>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
              />
              {errors.username && <p className="error">{errors.username}</p>}
              <input
                onChange={handleChange}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                onChange={handleChange}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <input
                onChange={handleChange}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password2"
                placeholder="Repeat Password"
              />
              {errors.password2 && <p className="error">{errors.password2}</p>}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Create Account
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Do you already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login"
            >
              {"  "}
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
