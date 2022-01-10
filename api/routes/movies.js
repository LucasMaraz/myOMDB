const router = require("express").Router();
const { MoviesController } = require("../controllers/MoviesController");

// este metodo es para obtener una pelicula por ID
router.get("/:id", MoviesController.getById);

// este metodo es para obtener la informacionde la compania peliculera por ID
router.get("/company/:id", MoviesController.getCompanyById);

// este metodo es para obtener todas las peliculas que coincidan con el titulo ingresado
router.get("/search/:title", MoviesController.getMoviesForTitle);

// este metodo es para obtener las peliculas mas populares del momento
router.get("/popular", MoviesController.PopularMovies);

module.exports = router;
