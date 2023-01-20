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
  delFavNotice,
} = require('../controllers/noticeControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const avatarStorrageMdw = require('../middlewares/avatarStorrageMdw');

const router = express.Router();

router.post('/new', authMdw, avatarStorrageMdw, ctrlWrapper(addNotice));
router.get('/:id', ctrlWrapper(getNotice));
router.get('/category/:category', ctrlWrapper(getNoticeByCategory));

router.patch('/favorite/:id',authMdw, ctrlWrapper(addFavNotice));

router.get('/favoriteads', authMdw, ctrlWrapper());
router.delete('/favoriteads/:id', authMdw, ctrlWrapper(delAuthFavNotice));
router.get('/myads/:userId', authMdw, ctrlWrapper(getAuthOwnNotice));
router.delete('/myads/:id', authMdw, ctrlWrapper(delAuthOwnNotice));

module.exports = router;
