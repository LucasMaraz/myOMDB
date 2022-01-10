const Sequelize = require("sequelize");

const db = new Sequelize("OMDB", null, null, {
  host: process.env.HOST,
  dialect: "postgres",
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  },
});

module.exports = db;
