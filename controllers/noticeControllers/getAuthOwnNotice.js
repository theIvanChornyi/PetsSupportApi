const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const getAuthOwnNotice = async (req, res) => {
  const { _id } = req.user;
  const notice = await userSchema
    .findById(_id)
    .populate({ path: 'notice', options: { sort: { createdAt: -1 } } });
  if (!notice) {
    throw createError(404, 'Not Found');
  }
  res.status(200).json(notice.notice);
};

module.exports = getAuthOwnNotice;
