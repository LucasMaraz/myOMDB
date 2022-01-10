const router = require("express").Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const favoritesRouter = require("./favorites");
const moviesRouter = require("./movies");

router.use("/movies", moviesRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/favorites", favoritesRouter);

module.exports = router;
