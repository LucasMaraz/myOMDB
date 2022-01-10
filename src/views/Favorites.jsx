import React from "react";
import CardFavorites from "../components/CardFavorites.jsx";
import axios from "axios";

const Favorites = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/favorites")
      .then((info) => info.data)
      .then((data) => setMovies(data));
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-wrap align-center mt-16">
        {movies.length === 0 ? (
          <div className="w-full bg-gray-200 mt-20">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mb-8 py-12">
              <div className="text-center pb-12">
                <h2 className="text-base font-bold text-indigo-600">myOMDB</h2>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-800 mt-6">
                  You don't have favorite movies
                </h1>
              </div>
            </section>
          </div>
        ) : undefined}
        {movies?.map((movie, i) => {
          return <CardFavorites key={i} movie={movie} />;
        })}
      </div>
      <div className="h-96"></div>
    </React.Fragment>
  );
};

export default Favorites;
