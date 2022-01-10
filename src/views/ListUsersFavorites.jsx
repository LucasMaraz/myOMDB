import axios from "axios";
import React from "react";
import CardFavUsers from "../components/CardFavUsers";
import { useParams } from "react-router-dom";

const ListUsersFavorites = () => {
  const { id } = useParams();

  const [favorites, setFavorites] = React.useState([]);
  const [username, setUsername] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`/api/favorites/${id}`)
      .then((info) => info.data)
      .then((data) => setFavorites(data));

    axios
      .get(`/api/users/${id}`)
      .then((info) => info.data)
      .then((data) => setUsername(data.username));
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-wrap align-center mb-6">
        <div className="w-full bg-gray-200 mt-20">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mb-8 py-12">
            <div className="text-center pb-12">
              <h2 className="text-base font-bold text-indigo-600">myOMDB</h2>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-800 mt-6">
                Welcome to {username}'s favorite movies
              </h1>
            </div>
          </section>
        </div>
        {favorites?.map((fav, i) => {
          return <CardFavUsers key={i} data={fav} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default ListUsersFavorites;
