const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const getAuthFavNotice = async (req, res) => {
  const { _id: owner } = req.user;
    const notice = await userSchema.findById({owner}, "favoriteNotices").populate("user.favoriteNotices")
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.status(200).json(notice);
}


module.exports = getAuthFavNotice;
