const mongoose = require('mongoose');

const { userNameRegExp } = require('../helpers/regExpressions');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxLength: 100,
      match: userNameRegExp,
    },
    birthday: {
      type: Date,
      default: Date.now,
    },
    breed: {
      type: String,
      maxLength: 100,
      match: userNameRegExp,
      default: 'Cutie',
    },
    avatarURL: {
      type: String,
      default: '',
    },
    comments: {
      type: String,
      default: '',
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { versionKey: false }
);

const Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
