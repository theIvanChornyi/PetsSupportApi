const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const { TOKEN_SALT } = require('../../helpers/config');
const dateFormating = require('../../helpers/dateFormating');

const registrationUser = async (req, res, next) => {
  const { email, password, name, location, phone } = req.body;
  const { _id } = await User.create({
    email,
    password,
    name: name.trim(),
    location: location.trim(),
    phone,
    birthday: dateFormating(),
  });
  try {
    const token = jwt.sign({ _id }, TOKEN_SALT, { expiresIn: '24h' });
    const user = await User.findOneAndUpdate(
      { _id },
      { token },
      { new: true }
    ).select({ name: 1, token: 1 });
    return res.status(201).json(user);
  } catch (error) {
    await User.findByIdAndRemove(_id);
    throw next(error);
  }
};

module.exports = registrationUser;
