const express = require('express');

const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const avatarStorrageMdw = require('../middlewares/avatarStorrageMdw');
const petValidationMdw = require('../middlewares/petValidationMdw');

const changeAvatar = require('../controllers/userControllers/changeAvatar');
const addUserPet = require('../controllers/userControllers/addUserPet');
const deleteUserPet = require('../controllers/userControllers/deleteUserPet');
const getUser = require('../controllers/userControllers/getUser');

const router = express.Router();

router.get('/', authMdw, ctrlWrapper(getUser));

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
