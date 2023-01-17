const addNotice = require('./addNotice');
const getNotice = require('./getNotice');
const getNoticeByCategory = require('./getNoticeByCategory');
const addFavNotice = require('./addFavNotice');
const getAuthFavNotice = require('./getAuthFavNotice');
const delAuthFavNotice = require('./delAuthFavNotice');
const getAuthOwnNotice = require('./getAuthOwnNotice');
const delAuthOwnNotice = require('./delAuthOwnNotice');

module.exports = { 
    addNotice, 
    getNotice, 
    getNoticeByCategory, 
    addFavNotice,
    getAuthFavNotice,
    delAuthFavNotice,
    getAuthOwnNotice,
    delAuthOwnNotice

};

