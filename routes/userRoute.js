const express = require('express');

const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const avatarStorrageMdw = require('../middlewares/avatarStorrageMdw');
const petValidationMdw = require('../middlewares/petValidationMdw');

const changeAvatar = require('../controllers/userControllers/changeAvatar');
const addUserPet = require('../controllers/userControllers/addUserPet');
const deleteUserPet = require('../controllers/userControllers/deleteUserPet');
const getUser = require('../controllers/userControllers/getUser');
const { userUpdateValidationMdw } = require('../middlewares/userValidationMdw');
const changeUser = require('../controllers/userControllers/changeUser');

const router = express.Router();

router.use(authMdw);

router.get('/', ctrlWrapper(getUser));
router.put('/', userUpdateValidationMdw, ctrlWrapper(changeUser));

router.patch('/avatar', avatarStorrageMdw, ctrlWrapper(changeAvatar));

router.post(
  '/petlist',
  avatarStorrageMdw,
  petValidationMdw,
  ctrlWrapper(addUserPet)
);
router.delete('/petlist/:id', ctrlWrapper(deleteUserPet));

module.exports = router;
