const express = require('express');
const getServices = require('../controllers/servicesControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const router = express.Router();

router.get('/', ctrlWrapper(getServices));

module.exports = router;
