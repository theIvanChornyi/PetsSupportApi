const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');

const delAuthOwnNotice = async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findByIdAndDelete(id);
    if (!notice) {
      throw createError(404, "Not Found");
    }
    res.status(204).json({message: "Notice deleted!"});
}


module.exports = delAuthOwnNotice;
