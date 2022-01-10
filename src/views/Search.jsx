import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardSearch from "../components/CardSearch";

const Search = () => {
  const movies = useParams();
  const [peliculas, setPeliculas] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/movies/search/:" + movies.id)
      .then((re) => re.data)
      .then((data) => {
        setPeliculas(data.results);
      });

    window.scrollTo(0, 0);
  }, [movies]);

  return (
    <div className="flex flex-wrap align-center mt-16">
      {peliculas.map((peli, i) => {
        return <CardSearch key={i} movie={peli} />;
      })}
    </div>
  );
};

export default Search;
