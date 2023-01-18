const express = require('express');

const {
    addNotice,
    getNotice,
    getNoticeByCategory,
    addFavNotice,
    getAuthFavNotice,
    delAuthFavNotice,
    getAuthOwnNotice,
    delAuthOwnNotice
} = require('../controllers/noticeControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const authMdw = require('../middlewares/authMdw');
const { avatarStorrageMiddleware } = require('../middlewares/avatarStorrageMiddleware');

const router = express.Router();

router.post('/new', authMdw, avatarStorrageMiddleware, ctrlWrapper(addNotice));
router.get('/:id', ctrlWrapper(getNotice));
router.get('/category/:category', ctrlWrapper(getNoticeByCategory));
router.patch('/favorite/:id', ctrlWrapper(addFavNotice));
router.get('/favoriteads/:_id', authMdw, ctrlWrapper(getAuthFavNotice));
router.delete('/favoriteads/:id', authMdw, ctrlWrapper(delAuthFavNotice));
router.get('/myads/:_id', authMdw, ctrlWrapper(getAuthOwnNotice));
router.delete('/myads/:id', authMdw, ctrlWrapper(delAuthOwnNotice));


module.exports = router;


