const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createError = require('../helpers/createError');
const { TOKEN_SALT } = require('../helpers/config');

const authMdw = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;
    if (!authorization) {
      throw createError(401, 'Not authorized');
    }

    const [tokenType, token] = authorization?.split(' ');
    if (tokenType !== 'Bearer') {
      throw createError(401, 'Not authorized');
    }
    try {
      const { _id } = jwt.verify(token, TOKEN_SALT);
      const user = await User.findById(_id);

      if (!user || !user.token || user.token !== token) {
        {
          throw createError(401, 'Not authorized');
        }
      }
      req.user = user;
    } catch (error) {
      {
        throw createError(401, 'Not authorized');
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMdw;
