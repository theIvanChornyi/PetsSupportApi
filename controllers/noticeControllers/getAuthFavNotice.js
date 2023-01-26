const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const getAuthFavNotice = async (req, res) => {
  const { _id } = req.user;
  const notice = await userSchema
    .findById(_id)
    .select({ favoriteNotices: 1, _id: 0 })
    .populate({
      path: 'favoriteNotices',
      options: { sort: { createdAt: -1 } },
    });
  if (!notice) {
    throw createError(404, 'Not Found');
  }
  res.status(200).json(notice.favoriteNotices);
};

module.exports = getAuthFavNotice;
