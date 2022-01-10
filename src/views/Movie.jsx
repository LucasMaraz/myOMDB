import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Movie = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const [movie, setMovie] = React.useState([]);
  const [company, setCompany] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/api/movies/${id}`)
      .then((info) => info.data)
      .then((data) => setMovie(data));

    axios
      .get(`/api/movies/company/${id}`)
      .then((info) => info.data)
      .then((data) => setCompany(data));
  }, []);

  const handlerClick = () => {
    axios
      .put("/api/favorites", {
        imdbID: id,
      })
      .then(
        Swal.fire({
          icon: "success",
          title: "Movie added to favorites",
          showConfirmButton: false,
          timer: 1000,
        })
      );
  };
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">{"myOMDB"}</h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            {movie.title}
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    : "https://www.clipartmax.com/png/middle/8-88342_size-movies-vector-icon-png.png"
                }
                alt="photo"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-gray-700 font-bold">{movie.title}</p>
              <p className="text-base text-gray-400 font-normal">
                {movie.tagline}
              </p>

              <p className="text-base leading-relaxed text-gray-500 font-normal">
                {movie.overview}
              </p>

              <div className="flex justify-start space-x-2">
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
                />
                {user.id ? (
                  <button
                    onClick={handlerClick}
                    className=" bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                ) : undefined}
              </div>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  h-80 ml-16">
            <div class="flex flex-col items-center pb-10 mt-16">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/original/${company.logo_path}`
                    : "https://pixsector.com/cache/94bed8d5/av3cbfdc7ee86dab9a41d.png"
                }
                /* alt="Bonnie image" */
              />
              <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {movie ? company.name : "Anonymous"}
              </h3>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Production
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gray-800">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 mb-16">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
              More movies like this
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white ">
              You can find in our search engine
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};
export default Movie;
