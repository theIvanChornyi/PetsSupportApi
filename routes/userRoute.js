const express = require('express');

const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const changeAvatar = require('../controllers/userControllers/changeAvatar');
const {
  avatarStorrageMiddleware,
} = require('../middlewares/avatarStorrageMiddleware');

const router = express.Router();

router.patch(
  '/avatar',
  authMdw,
  avatarStorrageMiddleware,
  ctrlWrapper(changeAvatar)
);
module.exports = router;
