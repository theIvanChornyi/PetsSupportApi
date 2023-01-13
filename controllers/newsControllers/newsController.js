const { listNews } = require('../../models/newsModel');

const getAllNews = async (req, res, next) => {
  try {
    const result = await listNews();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllNews;
