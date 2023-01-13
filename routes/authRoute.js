const express = require('express');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const registrationController = require('../controllers/authControllers/registrationController');
const loginController = require('../controllers/authControllers/loginController');

const router = express.Router();

router.post('/registration', ctrlWrapper(registrationController));
router.post('/login', ctrlWrapper(loginController));
router.get('/logout');
router.get('/current');
router.put('/');

module.exports = router;
