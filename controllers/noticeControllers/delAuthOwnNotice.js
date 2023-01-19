const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');
const User = require('../../models/userModel');

const delAuthOwnNotice = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const notice = await Notice.findByIdAndDelete(id);
  
  // const notice = await User.findById(_id).select({ favoriteNotices: 1 });
   if (!notice) {
      throw createError(404, "Not Found");
   }
  
  const public_id = data.avatarURL.split('/').reverse()[0].split('.')[0];
    await cloudinary.uploader.destroy(`userNotices/${public_id}`);
  // console.log (notice.favoriteNotices)
  // const index = await JSON.stringify(notice.favoriteNotices).includes(id);
  // console.log (index)
  // if (!index || []) {
  //   res.status(200).json({ message: "Haven`t" });
  //   return;
  // }
   
  const data = await User.findByIdAndUpdate(_id, { $pull: { notice: id } }, { new: true });

  res.status(204).json(data.notice);
  }


module.exports = delAuthOwnNotice;
