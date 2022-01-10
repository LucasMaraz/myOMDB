import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../store/user";
import Swal from "sweetalert2";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    Swal.fire({
      title: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/home");
        Swal.fire("You have left the session");

        dispatch(logoutRequest());
      }
    });
  };

  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/home"
              >
                myOMDB
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                to="/users"
              >
                Users
              </Link>
              {user.id ? (
                <Link
                  className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  to="/favorites"
                >
                  Favorites
                </Link>
              ) : null}
            </div>
            <div className="flex justify-center md:block">
              <div>
                {user.id ? (
                  <>
                    <button
                      onClick={handleClick}
                      className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    >
                      Logout{" "}
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="text-purple-500 bg-transparent border-l border-t border-b border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-2 rounded-l outline-none focus:outline-none mb-0 ease-linear transition-all duration-150"
                    >
                      Register{" "}
                    </Link>
                    <Link
                      to="/login"
                      className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-2 rounded-r outline-none focus:outline-none mb-0 ease-linear transition-all duration-150"
                    >
                      Login{" "}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
