require("./config/passport");
const express = require("express");
const favicon = require("express-favicon");
const port = process.env.PORT || 8080;
const redis = require("redis");
const session = require("express-session");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const routes = require("./routes/index");
const app = express();
const path = require("path");
const db = require("./config/db");

let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();

app.use(volleyball);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(favicon(__dirname + "/build/favicon.ico"));

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.set("trust proxy", 1);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
  })
);

app.use(function (req, res, next) {
  if (!req.session) {
    return next(new Error("Oh no")); //handle error
  }
  next();
});

//passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api", routes);

//db

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
