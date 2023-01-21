const express = require('express');

const {
  addNotice,
  getNotice,
  getNoticeByCategory,
  addFavNotice,
  getAuthFavNotice,
  delAuthFavNotice,
  getAuthOwnNotice,
  delAuthOwnNotice,
} = require('../controllers/noticeControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const avatarStorrageMdw = require('../middlewares/avatarStorrageMdw');
const noticeValidationMdw = require('../middlewares/noticeValidationMdw');

const router = express.Router();

router.patch('/favorite/:id', authMdw, ctrlWrapper(addFavNotice));
router.get('/favoriteads', authMdw, ctrlWrapper(getAuthFavNotice));
router.delete('/favoriteads/:id', authMdw, ctrlWrapper(delAuthFavNotice));
router.get('/myads', authMdw, ctrlWrapper(getAuthOwnNotice));
router.delete('/myads/:id', authMdw, ctrlWrapper(delAuthOwnNotice));

router.post('/new', authMdw, noticeValidationMdw, avatarStorrageMdw, ctrlWrapper(addNotice));
router.get('/:id', ctrlWrapper(getNotice));
router.get('/category/:category', ctrlWrapper(getNoticeByCategory));

module.exports = router;
