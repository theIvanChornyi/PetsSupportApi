const User = require('../../models/userModel');

const changeUser = async (req, res) => {
  const { _id } = req.user;
  const { name, email, birthday, phone, location } = req.body;

  const user = await User.findByIdAndUpdate(
    { _id },
    { name, email, birthday, phone, location },
    { new: true }
  ).select({
    name: 1,
    email: 1,
    birthday: 1,
    phone: 1,
    location: 1,
  });
  return res.status(200).json(user);
};

module.exports = changeUser;
