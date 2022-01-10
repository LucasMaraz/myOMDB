const S = require("sequelize");
const sequelize = require("../config/db");

class Favorites extends S.Model {}

Favorites.init(
  {
    name: {
      type: S.DataTypes.ARRAY(S.DataTypes.INTEGER),
      defaultValue: [32],
    },
  },
  {
    sequelize,
    modelName: "Favorite",
  }
);

module.exports = Favorites;
