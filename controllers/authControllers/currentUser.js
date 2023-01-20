const User = require('../../models/userModel');

const currentUser = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id).select({
    password: 0,
    pets: 0,
  });

  return res.status(200).json(user);
};

module.exports = currentUser;
