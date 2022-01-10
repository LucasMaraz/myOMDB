const router = require("express").Router();
const { UsersController } = require("../controllers/UsersController");

// este metodo es para obtener a todos los usuarios
router.get("/", UsersController.getAll);

// este metodo es para obtener a un usuario por ID
router.get("/:id", UsersController.getById);


module.exports = router;
