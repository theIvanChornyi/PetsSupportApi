const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {
  emailRegExp,
  passwordRegExp,
  userNameRegExp,
  phoneRegExp,
  dataRegExp,
} = require('../helpers/regExpressions');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegExp,
      minLength: 10,
      maxLength: 63,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: 7,
      maxLength: 32,
      match: passwordRegExp,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxLength: 100,
      match: userNameRegExp,
    },
    phone: {
      type: String,
      required: [true, 'Name is required'],
      minLength: 13,
      maxLength: 13,
      match: phoneRegExp,
      unique: true,
    },
    avatarURL: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      required: [true, 'Name is required'],
    },
    birthday: {
      type: String,
      match: dataRegExp,
    },
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pets' }],
    notice: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notice'
    }],
    favoriteNotices: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notice'
    }],
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.pre('save', async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
const User = mongoose.model('user', userSchema);

module.exports = User;
