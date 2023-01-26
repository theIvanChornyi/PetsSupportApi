const createError = require('../../helpers/createError');
const Notice = require('../../models/noticeModel');

const getNoticeByCategory = async (req, res) => {
  const { category } = req.params;
  const categoryArray = ['lostFound', 'inGoodHands', 'sell'];
  if (!categoryArray.some(item => item === category)) {
    throw createError(400, 'Invalid category');
  }
  const notice = await Notice.find({ category }).sort({ createdAt: -1 });
  if (!notice) {
    throw createError(404, 'Not Found');
  }
  res.status(200).json(notice);
};

module.exports = getNoticeByCategory;
