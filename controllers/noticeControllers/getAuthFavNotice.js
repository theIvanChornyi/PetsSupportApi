const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const getAuthFavNotice = async (req, res) => {
  const { _id } = req.user;
  const notice = await userSchema.findById(_id).select({ favoriteNotices: 1, _id: 0 }).populate('favoriteNotices');
  if (!notice) {
    throw createError(404, "Not Found");
  }
  res.status(200).json(notice);
};

module.exports = getAuthFavNotice;
