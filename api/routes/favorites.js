const router = require("express").Router();
const { FavoritesController } = require("../controllers/FavoritesController");

// este metodo es para obtener todas las peliculas favoritas del usuario en el que esta logueado
router.get("/", FavoritesController.getMyFavoritesMovies);

// este metodo es para obtener todas las peliculas favoritas de un usuario por ID
router.get("/:id", FavoritesController.getMoviesFavoritesByID);

// este metodo es para agregar una pelicula a los favoritos del usuario actual
router.put("/", FavoritesController.addToFavorites);

// este metodo es para eliminar una pelicula por ID
router.delete("/:id", FavoritesController.deleteById);

module.exports = router;
