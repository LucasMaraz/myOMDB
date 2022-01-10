const S = require("sequelize");
const sequelize = require("../config/db");

const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    favoritesId: {
      type: S.ARRAY(S.INTEGER),
      defaultValue: [],
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});
module.exports = User;
