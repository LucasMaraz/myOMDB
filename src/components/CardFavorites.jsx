import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const CardFavorites = ({ movie }) => {
  const handleClick = () => {
    axios.delete(`/api/favorites/${movie.id}`).then(window.location.reload());
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div class="flex justify-center w-1/2 my-8">
        <Link to={`/movie/${movie.id}`}>
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
            />
            <button
              onClick={handleClick}
              className="mt-6 h-16 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
              type="button"
            >
              <i className="fas fa-heart-broken"></i>
            </button>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CardFavorites;

{
  /* <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
              />
              <button
                onClick={handleClick}
                className="mt-6 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
              >
                <i className="fas fa-heart-broken"></i>
              </button>
              <Link to={`/movie/${movie.id}`}>
                <button
                  className="mt-6 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Ver pelicula
                </button>
              </Link> */
}
