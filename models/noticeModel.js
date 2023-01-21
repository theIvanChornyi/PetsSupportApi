const mongoose = require('mongoose');
const {
  userNameRegExp,
  commentRegExp,
  priceRegExp,
} = require('../helpers/regExpressions');

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minLength: 2,
      maxLength: 48,
      match: userNameRegExp,
    },
    name: {
        type: String,
        minLength: 2,
      maxLength: 16,
      match: userNameRegExp,
      default: '',
    },
    birthday: {
      type: Date,
      default: Date.now,
    },
    breed: {
        type: String,
        minLength: 2,
      maxLength: 24,
      match: userNameRegExp,
      default: '',
    },
    sex: {
      type: String,
      enum: ['male', 'female', ''],
      default: '',
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    price: {
      type: String,
      required: [true, 'Price is required'],
      match: priceRegExp,
    },
    avatarURL: {
      type: String,
      default: '',
    },
    comments: {
      type: String,
      required: [true, 'Comment is required'],
      minLength: 8,
        maxLength: 120,
      default: '',
      match: commentRegExp,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['lostFound', 'inGoodHands', 'sell'],
      default: 'sell',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = mongoose.model('notice', noticeSchema);

module.exports = Notice;
