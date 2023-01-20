const dateFormating = require('../../helpers/dateFormating');
const Pet = require('../../models/petModel');
const User = require('../../models/userModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const addUserPet = async (req, res) => {
  const { _id: owner } = req.user;

  let avatarURL = '';
  if (req?.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: '/petsAvatars',
      transformation: [{ height: 400, crop: 'scale' }],
    });
    avatarURL = secure_url;
  }
  const { name, birthday, breed, comments, _id } = await Pet.create({
    ...req.body,
    birthday: dateFormating(req.body.birthday),
    avatarURL,
    owner,
  });
  await User.findByIdAndUpdate(owner, { $push: { pets: _id } });

  return res
    .status(201)
    .json({ name, birthday, breed, avatarURL, comments, _id });
};

module.exports = addUserPet;
