const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');
const User = require('../../models/userModel');
const userSchema = require('../../models/userModel');

// const delAuthFavNotice = async (req, res) => {
//   const { id } = req.params;
//   const data = await Notice.findByIdAndDelete(id).populate('owner', { favoriteNotices: id } );
//     if (!data) {
//       throw createError(404, "Not Found");
//     }
//   console.log(data)
//     res.status(204).json({message: "Notice deleted from favourites"});
// }

const delAuthFavNotice = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const list = await User.findById(_id).select({ favoriteNotices: 1 });
  const index = await JSON.stringify(list.favoriteNotices).includes(id);
  if (index) {
    await User.findByIdAndUpdate(id, { $pull: { favoriteNotices: id } })
    res.status(200).json({message: "Deleted from favourites"});
    return
  }
  return res.status(200).json({message: "Not in Favorite"});
  
};


module.exports = delAuthFavNotice;
