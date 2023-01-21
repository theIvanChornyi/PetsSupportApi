const Joi = require('joi');
const createError = require('../helpers/createError');
const { commentRegExp } = require('../helpers/regExpressions');

const noticeValidationMdw = async (req, res, next) => {
  try {
    const { data } = await req.body;
    const reqBody = JSON.parse(data);
    req.body = reqBody;
    await schemaNotice.validateAsync(reqBody);
    next();
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(createError(400, error.message));
    }
    next(error);
  }
};

const schemaNotice = Joi.object({
  title: Joi.string().required().pattern(commentRegExp).min(2).max(48),
  name: Joi.string().pattern(commentRegExp).min(2).max(16),
  birthday: Joi.date(),
  breed: Joi.string().pattern(commentRegExp).min(2).max(24),
  sex: Joi.string().valid('male', 'female'),
  location: Joi.string().required(),
  price: Joi.string().required().min(1),
  avatarURL: Joi.string(),
  category: Joi.string()
    .required()
    .valid('lostFound', 'inGoodHands', 'sell')
    .default('sell'),
  comments: Joi.string().required().pattern(commentRegExp).min(8).max(120),
});

module.exports = noticeValidationMdw;
