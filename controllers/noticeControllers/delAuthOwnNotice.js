const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');
const User = require('../../models/userModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const delAuthOwnNotice = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const data = await User.findByIdAndUpdate(
    _id,
    { $pull: { notice: id } },
    { new: true }
  );
  const test = await User.updateMany(
    { favoriteNotices: id },
    { $pull: { favoriteNotices: id } }
  );
  const notice = await Notice.findByIdAndDelete(id);

  const public_id = data.avatarURL.split('/').reverse()[0].split('.')[0];
  await cloudinary.uploader.destroy(`userNotices/${public_id}`);

  if (!notice) {
    throw createError(404, 'Not Found');
  }
  res.status(204).send();
};

module.exports = delAuthOwnNotice;
