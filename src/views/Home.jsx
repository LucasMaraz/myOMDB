import React from "react";
import axios from "axios";
import CardsHome from "../components/CardsHome";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [search, setSearch] = React.useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
  };

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/movies/popular")
      .then((info) => info.data)
      .then((res) => setMovies(res.results));

    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="container w-full p-20 mx-auto text-center bg-white border-2 border-t-2 border-gray-300 h-18 rounded-xl rounded-t-none">
        <div>
          <div className="relative  w-full  items-stretch mb-3 ">
            <span className=" z-10 h-full leading-normal font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
              <i className="fas fa-search"></i>
            </span>
            <div>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-800 mb-6">
                Welcome to MyOMDB
              </h1>
              <h1 className=" text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 mb-6">
                Search your favorites movies
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="f px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-base outline-none focus:outline-none focus:ring w-full pl-10"
            >
              <input
                type="text"
                placeholder="Search movies"
                onChange={handleSearchChange}
                className="f px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 mt-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">myOMDB</h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white mt-6">
              The highest grossing movies of today
            </h1>
          </div>
        </section>
      </div>
      <div className="flex flex-wrap align-center mt-16">
        {movies.map((data, i) => {
          return <CardsHome key={i} movies={data} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
