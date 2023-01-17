const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const delAuthFavNotice = async (req, res) => {
    const { _id: owner } = req.user;
    const notice = await userSchema.findByIdAndDelete({owner}, req.body.favoriteNotices, { new: true })
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.status(204).json(notice);
}


module.exports = delAuthFavNotice;
