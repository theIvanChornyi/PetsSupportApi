const express = require('express');

const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const avatarStorrageMdw = require('../middlewares/avatarStorrageMdw');

const changeAvatar = require('../controllers/userControllers/changeAvatar');
const addUserPet = require('../controllers/userControllers/addUserPet');
const deleteUserPet = require('../controllers/userControllers/deleteUserPet');
const petValidationMdw = require('../middlewares/petValidationMdw');

const router = express.Router();

router.patch('/avatar', authMdw, avatarStorrageMdw, ctrlWrapper(changeAvatar));
router.post(
  '/petlist',
  authMdw,
  avatarStorrageMdw,
  petValidationMdw,
  ctrlWrapper(addUserPet)
);
router.delete('/petlist/:id', authMdw, ctrlWrapper(deleteUserPet));

module.exports = router;
