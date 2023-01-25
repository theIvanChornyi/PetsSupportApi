const createError = require('../../helpers/createError');
const User = require('../../models/userModel');

const Joi = require('joi');
const schemaFav = Joi.object({
  favorite: Joi.boolean(),
});

const addFavNotice = async (req, res) => {
  await schemaFav.validateAsync(req.body);
  const { id } = req.params;
  const { _id } = req.user;
  const { favorite } = req.body;

  const list = await User.findById(_id).select({ favoriteNotices: 1 });
  const index = await JSON.stringify(list.favoriteNotices).indexOf(id);

  if (favorite) {
    if (index !== -1) {
      throw createError(400, 'Already in favorite!');
    }
    const data = await User.findByIdAndUpdate(
      _id,
      { $push: { favoriteNotices: id } },
      { new: true }
    ).populate('notice');
    if (!data) {
      throw createError(404, 'Not Found');
    }
    return res.status(200).json({
      message: 'Add to fav',
      NoticeId: id,
    });
  } else {
    if (index === -1) {
      throw createError(404, 'Not Found');
    }
    const data = await User.findByIdAndUpdate(
      _id,
      { $pull: { favoriteNotices: id } },
      { new: true }
    ).populate('notice');
    if (!data) {
      throw createError(404, 'Not Found');
    }
    return res.status(200).json({
      message: 'Deletete from fav',
      NoticeId: id,
    });
  }
};

module.exports = addFavNotice;
