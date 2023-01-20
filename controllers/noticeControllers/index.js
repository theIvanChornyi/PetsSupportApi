const addNotice = require('./addNotice');
const getNotice = require('./getNotice');
const getNoticeByCategory = require('./getNoticeByCategory');
const addFavNotice = require('./addFavNotice');
const getAuthFavNotice = require('./getAuthFavNotice');
const delAuthFavNotice = require('./delAuthFavNotice');
const getAuthOwnNotice = require('./getAuthOwnNotice');
const delAuthOwnNotice = require('./delAuthOwnNotice');
const delFavNotice = require('./delAuthOwnNotice');

module.exports = { 
    addNotice, 
    getNotice, 
    getNoticeByCategory, 
    addFavNotice,
    delFavNotice,
    getAuthFavNotice,
    delAuthFavNotice,
    getAuthOwnNotice,
    delAuthOwnNotice

};

