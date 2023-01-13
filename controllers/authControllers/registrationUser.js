const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const { TOKEN_SALT } = require('../../helpers/config');

const registrationUser = async (req, res, next) => {
  const { email, password, name, location, phone } = req.body;
  const { _id } = await User.create({
    email,
    password,
    name: name.trim(),
    location: location.trim(),
    phone,
  });
  try {
    const token = jwt.sign({ _id }, TOKEN_SALT, { expiresIn: '24h' });
    const user = await User.findOneAndUpdate(
      { _id },
      { token },
      { new: true }
    ).select({ password: 0, pets: 0, notice: 0 });
    return res.status(201).json(user);
  } catch (error) {
    await User.findByIdAndRemove(_id);
    throw next(error);
  }
};

module.exports = registrationUser;
