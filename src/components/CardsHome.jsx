import React from "react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

const Cards = ({ movies }) => {
  return (
    <React.Fragment>
      <div className="flex justify-center w-1/4 my-8">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img
            className="rounded-t-lg"
            src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
            alt=""
          />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {movies.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {movies.overview.slice(0, 110)}...
            </p>
            <Link to={`/movie/${movies.id}`}>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <BsEyeFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
