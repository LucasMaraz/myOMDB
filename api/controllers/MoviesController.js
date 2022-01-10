require("dotenv").config();
const axios = require("axios");
const urlKey = process.env.KEY_GEN;
const apiKey = process.env.API_KEY;
const keySearch = process.env.KEY_SEA;
const keyPopular = process.env.KEY_POP;

class MoviesController {
  static async getById(req, res, next) {
    try {
      const movie = await axios(urlKey + req.params.id + apiKey);
      return res.json(movie.data);
    } catch (err) {
      next(err);
    }
  }

  static async getCompanyById(req, res, next) {
    try {
      const movie = await axios(urlKey + req.params.id + apiKey);
      const companyInfo = movie.data.production_companies[0];
      return res.status(202).send(companyInfo);
    } catch (err) {
      next(err);
    }
  }
  static async getMoviesForTitle(req, res, next) {
    try {
      const title = req.params.title;
      const movie = await axios(keySearch + title);
      return res.json(movie.data);
    } catch (err) {
      next(err);
    }
  }
  static async PopularMovies(req, res, next) {
    try {
      const movies = await axios(keyPopular);
      return res.json(movies);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { MoviesController };
