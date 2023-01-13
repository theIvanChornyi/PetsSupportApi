const createError = require('../../helpers/createError');
const User = require('../../models/userModel');

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate({ _id }, { token: null });
  return res.status(204).send();
};

module.exports = logoutController;
