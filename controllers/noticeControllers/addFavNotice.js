const createError = require('../../helpers/createError');
const User = require('../../models/userModel');

const addFavNotice = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const list = await User.findById(_id).select({ favoriteNotices: 1 });
  const index = await JSON.stringify(list.favoriteNotices).indexOf(id);
  if (index !== -1) {
      throw createError(400, 'Already in favorite!')
  }
  const data = await User.findByIdAndUpdate(_id, { $push: { favoriteNotices: id } }, { new: true });
  if (!data) {
    throw createError(404, "Not Found");
  }
  return res.status(200).json(data.favoriteNotices);
  
};

module.exports = addFavNotice;


