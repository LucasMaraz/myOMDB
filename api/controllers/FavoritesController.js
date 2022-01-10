const { sequelize } = require("../models/User");
const User = require("../models/User");
const axios = require("axios");
const urlKey = process.env.KEY_GEN;
const apiKey = process.env.API_KEY;

class FavoritesController {
  static async getMyFavoritesMovies(req, res, next) {
    try {
      const moviesId = req.user.favoritesId;
      const favoritesMovies = [];

      for (let i = 0; i < moviesId.length; i++) {
        let movie = await axios(urlKey + moviesId[i] + apiKey);
        favoritesMovies.push(movie.data);
      }

      return res.json(favoritesMovies);
    } catch (err) {
      next(err);
    }
  }

  static async addToFavorites(req, res, next) {
    try {
      const movieId = req.body.imdbID;
      const id = req.user.id;

      const user = await User.update(
        {
          favoritesId: sequelize.fn(
            "array_append",
            sequelize.col("favoritesId"),
            movieId
          ),
        },
        {
          where: {
            id: id,
          },
        }
      );

      return res.send(user);
    } catch (err) {
      next(err);
    }
  }
  static async deleteById(req, res, next) {
    try {
      const idMovie = parseInt(req.params.id);
      const id = req.user.id;
      const favorites = req.user.favoritesId;

      const numIn = await favorites.indexOf(idMovie);

      await favorites.splice(numIn, 1);

      await User.update({ favoritesId: favorites }, { where: { id } });
      return res.sendStatus(202);
    } catch (err) {
      next(err);
    }
  }

  static async getMoviesFavoritesByID(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id);

      const favorites = user.favoritesId;

      return res.status(202).send(favorites);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { FavoritesController };
