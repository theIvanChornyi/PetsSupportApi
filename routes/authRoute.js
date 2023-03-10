const express = require('express');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const {
  userRegValidationMdw,
  userUpdateValidationMdw,
} = require('../middlewares/userValidationMdw');

const registrationUser = require('../controllers/authControllers/registrationUser');
const loginUser = require('../controllers/authControllers/loginUser');
const logoutUser = require('../controllers/authControllers/logoutUser');
const currentUser = require('../controllers/authControllers/currentUser');
const changeUser = require('../controllers/authControllers/changeUser');

const router = express.Router();

router.post(
  '/registration',
  userRegValidationMdw,
  ctrlWrapper(registrationUser)
);
router.post('/login', ctrlWrapper(loginUser));
router.get('/logout', authMdw, ctrlWrapper(logoutUser));
router.get('/current', authMdw, ctrlWrapper(currentUser));
router.put('/', authMdw, userUpdateValidationMdw, ctrlWrapper(changeUser));

module.exports = router;
