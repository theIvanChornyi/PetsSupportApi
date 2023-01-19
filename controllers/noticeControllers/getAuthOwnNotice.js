const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const getAuthOwnNotice = async (req, res) => {
  const userId = req.params.userId;
  const notice = await userSchema.findById(userId).populate('notice');
    if (!notice) {
      throw createError(404, "Not Found");
    }
    res.status(200).json(notice.notice);
}


module.exports = getAuthOwnNotice;
