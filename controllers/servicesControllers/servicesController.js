const listServices = require('../../models/servicesModel');

const getServices = async (req, res, next) => {
  const data = await listServices();
  res.status(200).json(data);
};

module.exports = getServices;
