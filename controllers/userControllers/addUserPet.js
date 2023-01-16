const Pet = require('../../models/petModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const addUserPet = async (req, res) => {
  const { _id: owner } = req.user;

  let avatarURL = '';
  if (req?.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: '/petsAvatars',
    });
    avatarURL = secure_url;
  }

  const data = await Pet.create({
    ...req.body,
    avatarURL,
    owner,
  });

  return res.status(201).json(data);
};

module.exports = addUserPet;
