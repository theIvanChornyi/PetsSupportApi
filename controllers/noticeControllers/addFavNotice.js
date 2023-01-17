const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');

const addFavNotice = async (req, res) => {
  const { id } = req.params;

  const data = await Notice.findByIdAndUpdate(id).populate('owner', { favoriteNotices:  id } );
    if (!data) {
      throw createError(404, "Not Found");
    }
    res.status(200).json(data);
}


module.exports = addFavNotice;



