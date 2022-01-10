const User = require("./models/User");
const fakeDataUsers = require("./utils/fakeDataUsers.json");

const seed = async () => {
  await User.bulkCreate(fakeDataUsers);
  return process.exit();
};

seed();
