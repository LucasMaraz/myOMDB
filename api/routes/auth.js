const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");


router.post("/register", (req, res) => {
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user) res.sendStatus(500);
    else {
      User.create(req.body)
        .then((newUser) => {
          res.status(201).send(newUser);
        })
        .catch((err) => res.status(404).send(err));
    }
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
