const multer = require('multer');
const createError = require('../helpers/createError');

const storage = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 5000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload a valid image file'));
    }
    cb(null, true);
  },
});

const avatarStorrageMiddleware = function (req, res, next) {
  const upload = storage.single('avatar');
  upload(req, res, function (err) {
    if (err) {
      next(createError(400, err.message));
    }
    if (!req?.file) {
      next(createError(400, 'Unexpected image'));
    }
    next();
  });
};

module.exports = { avatarStorrageMiddleware };
