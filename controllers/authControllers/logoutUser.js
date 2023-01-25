const User = require('../../models/userModel');

const logoutUser = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate({ _id }, { token: null });
  return res.status(204).send();
};

module.exports = logoutUser;
