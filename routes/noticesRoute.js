const express = require('express');

const {
  addNotice,
  getNotice,
  getNoticeByCategory,
  addFavNotice,
  getAuthFavNotice,
  getAuthOwnNotice,
  delAuthOwnNotice,
} = require('../controllers/noticeControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const avatarStorrageMdw = require('../middlewares/avatarStorrageMdw');

const router = express.Router();

router.patch('/favorite/:id', authMdw, ctrlWrapper(addFavNotice));
router.get('/favorite', authMdw, ctrlWrapper(getAuthFavNotice));
router.get('/myads', authMdw, ctrlWrapper(getAuthOwnNotice));
router.delete('/myads/:id', authMdw, ctrlWrapper(delAuthOwnNotice));

router.post('/new', authMdw, avatarStorrageMdw, ctrlWrapper(addNotice));
router.get('/:id', ctrlWrapper(getNotice));
router.get('/category/:category', ctrlWrapper(getNoticeByCategory));

module.exports = router;
