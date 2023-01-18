const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');
const userSchema = require('../../models/userModel');

const delAuthFavNotice = async (req, res) => {
  const { id } = req.params;
  const data = await Notice.findByIdAndDelete(id).populate('owner', { favoriteNotices: id } );
    if (!data) {
      throw createError(404, "Not Found");
    }
  console.log(data)
    res.status(204).json({message: "Notice deleted from favourites"});
}


module.exports = delAuthFavNotice;
