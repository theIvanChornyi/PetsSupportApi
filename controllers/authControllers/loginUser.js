const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('../../helpers/createError');
const User = require('../../models/userModel');

const { TOKEN_SALT } = require('../../helpers/config');

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const reqUser = await User.findOne({ email });

  if (!reqUser) {
    throw createError(401, 'Wrong email!');
  }
  const match = await bcrypt.compare(password, reqUser.password);

  if (!match) {
    throw createError(401, 'Wrong password!');
  }
  const { _id } = reqUser;
  const token = jwt.sign({ _id }, TOKEN_SALT, { expiresIn: '24h' });
  const user = await User.findOneAndUpdate(
    { _id },
    { token },
    { new: true }
  ).select({ password: 0, pets: 0, notice: 0 });

  return res.status(200).json(user);
};

module.exports = loginUser;
