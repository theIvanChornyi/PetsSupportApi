const Notice = require('../../models/noticeModel');
const createError = require('../../helpers/createError');

const getNotice = async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findById(id).populate('owner', 'email phone -_id');
    if (!notice) {
      throw createError(404, "Not Found");
    }
    res.status(200).json(notice);
}

module.exports = getNotice;
