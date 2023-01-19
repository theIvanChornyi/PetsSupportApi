const dateFormating = require('../../helpers/dateFormating');
const User = require('../../models/userModel');

const getUser = async (req, res) => {
  const { _id: userId } = req.user;

  const user = await User.findById(userId)
    .select({ password: 0, token: 0, notice: 0 })
    .populate('pets', '-owner');

  const birthday = dateFormating(user.birthday);
  return res.status(200).json({ ...user, birthday });
};

module.exports = getUser;
