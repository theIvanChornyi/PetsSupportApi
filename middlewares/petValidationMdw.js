const Joi = require('joi');
const createError = require('../helpers/createError');
const { userNameRegExp, dataRegExp } = require('../helpers/regExpressions');

const petValidationMdw = async (req, res, next) => {
  try {
    const { data } = await req.body;
    const reqBody = JSON.parse(data);
    req.body = reqBody;
    await schemaPet.validateAsync(reqBody);
    next();
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(createError(400, error.message));
    }
    next(error);
  }
};

const schemaPet = Joi.object({
  name: Joi.string().pattern(userNameRegExp).min(2).max(16).required(),
  birthday: Joi.string().pattern(dataRegExp).messages({
    'string.pattern.base': `Date shouldt be dd.mm.yyyy format only`,
  }),
  breed: Joi.string().min(2).max(16),
  comments: Joi.string().min(8).max(120),
});

module.exports = petValidationMdw;
