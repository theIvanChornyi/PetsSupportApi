const createError = require('../../helpers/createError');
const Pet = require('../../models/petModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const deleteUserPet = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Pet.findByIdAndDelete(id);

    if (!data) throw createError(404, 'Not found');

    const public_id = data.avatarURL.split('/').reverse()[0].split('.')[0];
    await cloudinary.uploader.destroy(`petsAvatars/${public_id}`);

    return res.status(204).send();
  } catch (error) {
    if (
      error.message ===
      `Cast to ObjectId failed for value \"${id}\" (type string) at path \"_id\" for model \"pets\"`
    ) {
      throw createError(400, 'Invalid id');
    }
    next(error);
  }
};

module.exports = deleteUserPet;
