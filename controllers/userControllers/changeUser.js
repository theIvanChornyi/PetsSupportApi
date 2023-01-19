const User = require('../../models/userModel');

const changeUser = async (req, res) => {
  const { _id } = req.user;
  const { name, email, birthday, phone, location } = req.body;

  const user = await User.findByIdAndUpdate(
    { _id },
    { name, email, birthday, phone, location },
    { new: true }
  )
    .select({ password: 0, token: 0, notice: 0 })
    .populate('pets', '-owner');
  return res.status(200).json(user);
};

module.exports = changeUser;
