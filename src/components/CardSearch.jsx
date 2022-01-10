import React from "react";
import { Link } from "react-router-dom";

const CardSearch = ({ movie }) => {
  return (
    <React.Fragment>
      <div class="flex justify-center w-1/2 my-8">
        <Link to={`/movie/${movie.id}`}>
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : "https://www.clipartmax.com/png/middle/8-88342_size-movies-vector-icon-png.png"
              }
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {movie.title}
              </h5>
              <p class="text-gray-700 text-base mb-4">
                {movie.overview?.slice(0, 170)}...
              </p>
              <p class="text-gray-600 text-xs">Fecha: {movie.release_date}</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CardSearch;
