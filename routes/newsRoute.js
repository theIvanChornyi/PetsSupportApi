const express = require('express');
const { getAllNews } = require('../controllers/newsControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const router = express.Router();

router.get('/', ctrlWrapper(getAllNews));

module.exports = router;
