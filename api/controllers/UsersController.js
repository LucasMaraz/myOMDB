const User = require("../models/User");

class UsersController {
  static async getAll(req, res, next) {
    try {
      const users = await User.findAll();
      return res.status(200).send(users);
    } catch (err) {
      next(err);
    }
  }
  static async getById(req, res, next) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      return res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { UsersController };
