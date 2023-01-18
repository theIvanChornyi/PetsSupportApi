const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');

const getAuthOwnNotice = async (req, res) => {
  const { _id } = req.params;
  const notice = await Notice.find({ owner: _id });
    if (!notice) {
      throw createError(404, "Not Found");
    }
    res.status(200).json(notice);
}


module.exports = getAuthOwnNotice;
