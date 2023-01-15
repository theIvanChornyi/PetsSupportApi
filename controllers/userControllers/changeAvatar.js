const User = require('../../models/userModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const changeAvatar = async (req, res) => {
  const { _id } = req.user;

  const upload = await cloudinary.uploader.upload(req.file.path, {
    width: 200,
    height: 300,
    gravity: 'faces',
    crop: 'fill',
  });

  const user = await User.findByIdAndUpdate(
    { _id },
    { avatarURL: upload.secure_url },
    { new: true }
  ).select({
    avatarURL: 1,
    _id: 0,
  });
  return res.status(200).json(user);
};

module.exports = changeAvatar;
