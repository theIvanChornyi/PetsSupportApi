const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const getAuthOwnNotice = async (req, res) => {
  const { _id: owner } = req.user;
    const notice = await userSchema.find({owner}, "notice").populate("user", [notice])
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.status(200).json(notice);
}


module.exports = getAuthOwnNotice;
