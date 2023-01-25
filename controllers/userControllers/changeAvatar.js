const User = require('../../models/userModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const changeAvatar = async (req, res) => {
  const { _id } = req.user;

  const upload = await cloudinary.uploader.upload(req.file.path, {
    folder: '/userAvatars',
    transformation: [
      { gravity: 'face', height: 400, width: 400, crop: 'crop' },
      { radius: 'max' },
      { width: 200, crop: 'scale' },
    ],
  });

  const user = await User.findByIdAndUpdate(
    { _id },
    { avatarURL: upload.secure_url }
  ).select({
    avatarURL: 1,
    _id: 0,
  });

  const public_id = user.avatarURL.split('/').reverse()[0].split('.')[0];
  await cloudinary.uploader.destroy(`userAvatars/${public_id}`);

  return res.status(200).json({ avatarURL: upload.secure_url });
};

module.exports = changeAvatar;
