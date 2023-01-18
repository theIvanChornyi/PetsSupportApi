const createError = require('../../helpers/createError');
const userSchema = require('../../models/userModel');

const delAuthFavNotice = async (req, res) => {
  const { _id } = req.params;
  const notice = await userSchema.findByIdAndDelete(_id).select({ notice:1 }).populate('title')
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.status(204).json(notice);
}


module.exports = delAuthFavNotice;
