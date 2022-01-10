import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Link
        rel="stylesheet"
        to="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />

      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className=" container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 Copyright:
              <Link to="/home" className="text-gray-600 ml-1" target="_blank">
                myOMDB
              </Link>
            </p>
            <span className=" inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link to="" className="text-gray-500">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="" className="ml-3 text-gray-500">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="ml-3 text-gray-500">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="" className="ml-3 text-gray-500">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="" className="ml-3 text-gray-500">
                <i className="fab fa-instagram"></i>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
