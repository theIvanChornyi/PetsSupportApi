const path = require('path');
const multer = require('multer');
const createError = require('../helpers/createError');
const fileSlorageDir = path.join(__dirname, '../tmp');

const storage = multer.diskStorage({
  destination: fileSlorageDir,
  limits: { fileSize: 500000 },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const avatarStorrageMiddleware = function (req, res, next) {
  const upload = multer({ storage }).single('avatar');
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
