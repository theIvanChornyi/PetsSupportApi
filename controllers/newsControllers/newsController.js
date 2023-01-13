const { listNews } = require('../../models/newsModel');

const getAllNews = async (req, res, next) => {
  const result = await listNews();
  res.status(200).json(result);
};

module.exports = getAllNews;
