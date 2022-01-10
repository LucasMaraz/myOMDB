import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CardFavUsers = (data) => {
  const [datos, setDatos] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/api/movies/${data.data}`)
      .then((info) => info.data)
      .then((data) => setDatos(data));
  }, []);

  return (
    <React.Fragment>
      
      <div class="flex justify-center w-1/2 my-8">
        <Link to={`/movie/${datos.id}`}>
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={`https://image.tmdb.org/t/p/original/${datos.poster_path}`}
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {datos.title}
              </h5>
              <p class="text-gray-700 text-base mb-4">
                {datos.overview?.slice(0, 170)}...
              </p>
              <p class="text-gray-600 text-xs">Fecha: {datos.release_date}</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CardFavUsers;
