const Notice = require('../../models/noticeModel');
const cloudinary = require('../../services/cloudinary/cloudinary');

const createError = require('../../helpers/createError');
const User = require('../../models/userModel');


const addNotice = async (req, res, next) => {
  let avatarURL = '';
  if (!req.body?.notice) {
    throw createError(400, 'Not found request param notice');
  }
  if (req?.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: '/userNotices',
      transformation: [{ height: 400, crop: 'scale' }],
    });
    avatarURL = secure_url;
  }
  const { _id: owner } = req.user;
  const data = JSON.parse(req.body.notice);

  const { error } = await schemaNotice.validateAsync(data);
  if (error) {
    throw createError(400, 'Missing required name field');
  }

  const notice = await Notice.create({
    ...data,
    avatarURL,
    owner,
  });
  console.log (notice.id)
  await User.findByIdAndUpdate(owner, { $push: { notice: notice.id } });

  return res.status(201).json(notice);
};

module.exports = addNotice;
